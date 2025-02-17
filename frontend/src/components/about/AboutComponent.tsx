import { useEffect, useState } from "react";
import { TypoBody1, TypoBody2, TypoH1, TypoH2 } from "../../styled-components/styledTypographie";
import {  AnimationWrapper, ContentBox, ContentWrapper, FootWrapperLeft, FootWrapperRight, LeftStep, RightStep, ShoeAnimationLeft, ShoeAnimationRight } from "./aboutComponent.styles";
import React from "react";
import { clipPath } from "framer-motion/client";

function createRightStep() {
    const steps = [];
    for(let i = 0; i <= 30; i++) {
        steps.push(<RightStep className="step"/>)
    }
    return <>{steps}</>
}

function createLeftStep() {
    const steps = [];
    for(let i = 0; i <= 30; i++) {
        steps.push(<LeftStep className="step"/>)
    }
    return <>{steps}</>
}


export function AboutComponent() {


    useEffect(() => {
        // Alle Elemente mit der Klasse "step" auswählen
        const steps = document.querySelectorAll('.step');
    
        // Observer konfigurieren: 
        // -> const observer = new IntersectionObserver(callback, options);
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";

            } else {
              entry.target.style.opacity = "0";

            }
          });
        }, {
          root: null, // viewport als Bezugsgröße
          rootMargin: "-33% 0px -33% 0px",
          threshold: 1, // Sobald ein Pixel in dem Bereich ist
        });
    
        // Beobachte jedes Step-Element
        steps.forEach(step => observer.observe(step));
    
        // Aufräumen beim Unmount
        return () => observer.disconnect();
      }, []);



    return ( 
        <>
        <ContentWrapper>
            
                <ContentBox>
                    <TypoH1>Our Mission</TypoH1>
                    <hr></hr>
                    <TypoBody1>At nightStep, our mission is to connect the vibrant club community by providing a dynamic platform where club-goers can organize, interact, and engage with each other.<br/> At the same time, we empower clubs to present themselves in the best possible light. We strive to bridge the gap between enthusiastic club fans and the venues they love, fostering a space that enhances the overall nightlife experience.</TypoBody1>
                </ContentBox>

                <ContentBox>
                    <TypoH1>What We Offer</TypoH1>
                    <hr></hr>
                    <TypoBody2>Blog Function for Clubs</TypoBody2>
                    <TypoBody1>Clubs can share updates, news, and exclusive content through a blog, helping build stronger connections with their audience and keeping them engaged.</TypoBody1>
                    <p></p>
                    <TypoBody2>Event Publication</TypoBody2>
                    <TypoBody1>Clubs can easily publish and promote upcoming events, making it easier for club-goers to discover and attend events that interest them.</TypoBody1>
                    <p></p>
                    <TypoBody2>Community Group Functionality</TypoBody2>
                    <TypoBody1>NightStep allows users to join groups based on their favorite clubs, genres, or events, fostering a sense of community and encouraging meet-ups.</TypoBody1>
                    <p></p>
                    <TypoBody2>Club Image Galleries</TypoBody2>
                    <TypoBody1>Users can explore galleries of club images, giving them a glimpse of the venue's atmosphere and helping them choose the right place for their night out.</TypoBody1>
                </ContentBox>

                <ContentBox>
                    <TypoH1>Key Features</TypoH1>
                    <hr></hr>
                    <TypoBody2>Intuitive Event Management</TypoBody2>
                    <TypoBody1>Easy Scheduling: Create and adjust your event calendar effortlessly.</TypoBody1>
                    <TypoBody1>Live Updates: Instantly share any changes or announcements with your community.</TypoBody1>
                    <p></p>
                    <TypoBody2>Seamless Promotion</TypoBody2>
                    <TypoBody1>Ticketing Integration: Manage ticket sales directly through the platform.</TypoBody1>
                    <TypoBody1>Targeted Promotions: Reach the right audience with tailored marketing tools.</TypoBody1>
                    <p></p>
                    <TypoBody2>Community Engagement</TypoBody2>
                    <TypoBody1>Dynamic Profiles: Showcase your venue and upcoming events.</TypoBody1>
                    <TypoBody1>Direct Communication: Engage with your community through built-in messaging and notification systems.</TypoBody1>
                </ContentBox>

                <ContentBox>
                    <TypoH1>Join Us</TypoH1>
                    <hr></hr>
                    <TypoBody1>Whether you’re a small local club or a large event space, nightStep is designed to help you elevate your operations and connect more effectively with your audience.<br/> Join us in redefining the nightlife experience—let’s take your club to new heights together!</TypoBody1>
                </ContentBox>

            </ContentWrapper>

                <AnimationWrapper>
                    <FootWrapperLeft>
                        {createLeftStep()}
                    </FootWrapperLeft>

                    <FootWrapperRight>
                        {createRightStep()}
                    </FootWrapperRight>

                </AnimationWrapper>
        </>
    )
}