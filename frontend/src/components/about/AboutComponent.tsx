import { useEffect } from "react";
import { TypoBody1, TypoH1, TypoH2 } from "../../styled-components/styledTypographie";
import {  AnimationWrapper, ContentBox, FootWrapperLeft, FootWrapperRight, LeftStep, RightStep, ShoeAnimationLeft, ShoeAnimationRight } from "./aboutComponent.styles";
import React from "react";



export function AboutComponent() {



    return ( 
        <>
            <ContentBox>
                <TypoH2>
                    Our Mission
                </TypoH2>
                <TypoBody1>
                At nightStep, our mission is to connect the vibrant club community by providing a dynamic platform where club-goers can organize, interact, and engage with each other. At the same time, we empower clubs to present themselves in the best possible light. We strive to bridge the gap between enthusiastic club fans and the venues they love, fostering a space that enhances the overall nightlife experience.
                </TypoBody1>
            </ContentBox>
            <AnimationWrapper>

                <FootWrapperLeft>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                    <RightStep></RightStep>
                </FootWrapperLeft>



                <FootWrapperRight>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                    <LeftStep></LeftStep>
                </FootWrapperRight>


            </AnimationWrapper>
        </>
    )
}