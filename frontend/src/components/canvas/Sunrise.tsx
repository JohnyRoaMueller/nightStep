import { useEffect, useRef } from "react";

const Sunrise = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let frame = 0;
  const maxFrames = 400;
  const sunRadius = 120;
  let sunY = canvas.height;

  const rayCount = 12;
  const baseRayLength = 120;
  let angleOffset = 0;

  // Direction controls animation:
  // 1 = sun rising (frame increasing)
  // -1 = sun setting (frame decreasing)
  let direction = 1;

  // Handle resizing canvas to its container size
  const resize = () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    sunY = canvas.height;
  };
  window.addEventListener("resize", resize);
  resize();

  let animationFrameId: number;

  const animate = () => {
    // Move frame according to direction
    frame += 7 * direction;

    // Clamp frame within [0, maxFrames]
    if (frame > maxFrames) frame = maxFrames;
    if (frame < 0) frame = 0;

    // Slowly rotate rays
    angleOffset += 0.01;

    // Progress from 0 to 1, clamped
    const progress = Math.min(Math.max(frame / maxFrames, 0), 1);

    // Calculate vertical position of sun based on progress
    sunY = canvas.height - progress * (canvas.height / 1.5);

    // Draw sky gradient
    const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGradient.addColorStop(
      0,
      `rgba(${30 + progress * 225}, ${30 + progress * 120}, ${
        60 + progress * 80
      }, 1)`
    );
    skyGradient.addColorStop(1, "#000022");
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw sun rays
    for (let i = 0; i < rayCount; i++) {
      const angle = (i * (2 * Math.PI)) / rayCount + angleOffset;
      const x1 = canvas.width / 2 + Math.cos(angle) * sunRadius;
      const y1 = sunY + Math.sin(angle) * sunRadius;
      const x2 = canvas.width / 2 + Math.cos(angle) * (sunRadius + baseRayLength);
      const y2 = sunY + Math.sin(angle) * (sunRadius + baseRayLength);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(255, 200, 0, 0.15)`; // Transparent rays
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Draw sun circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, sunY, sunRadius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 204, 0, ${0.3 + progress * 0.5})`;
    ctx.fill();

    // Draw ground
    ctx.fillStyle = "#222";
    ctx.fillRect(0, canvas.height * 1, canvas.width, canvas.height * 1);

    // When sun has fully risen and direction is still up
    if (progress === 1 && direction === 1) {
      // After 3 seconds, start setting the sun
      setTimeout(() => {
        direction = -1;
      }, 3000);
    }

    // Continue animation while sun is moving (either up or down)
    if (
      (progress > 0 && progress < 1) ||
      (progress === 1 && direction === 1) ||
      (progress > 0 && direction === -1)
    ) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      // Animation finished (sun fully set)
      // You can add any finishing code here if needed
    }

    if (progress === 1) {
      // Some Text
      ctx.font = "30px Arial";                     
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; 
      ctx.textAlign = "center";                    
      ctx.fillText("It is daytime on this site!", canvas.width / 2, sunY + sunRadius + 40);
    }    
  };

  animate();

  // Cleanup on component unmount
  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", resize);
  };
}, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "60vh", display: "block" }}
    />
  );
};

export default Sunrise;