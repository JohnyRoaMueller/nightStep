import { useState } from 'react';
import NightStepLogoSVG from '../../assets/images/nightStepLogo-WhiteOnBlack.svg';

export const NightStepLogoIMG = () => {

  const [hover, setHover] = useState(false)

  return (     
    <img 
      src={NightStepLogoSVG} 
      alt="NightStep Logo" 
      style={{ 
          width: '50px',
          objectFit: 'contain',
         }}
        onMouseEnter={() => setHover(true)}  // Hover aktivieren
        onMouseLeave={() => setHover(false)} // Hover deaktivieren
    />

  )
};

export default NightStepLogoIMG;