import React, { useRef, useEffect, forwardRef, useState } from 'react';
import { SunriseWrapper } from './noMatchUIStyles';
import FloatingGhost from '../../canvas/Sunrise';
import Sunrise from '../../canvas/Sunrise';
import { Button } from '@mui/material';
import PrimaryButton from '../../../common/button/primaryButton/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { TypoH2 } from '../../../styled-components/styledTypographie';



function NoMatch() {


    const ref = useRef(null)
    const navigateTo = useNavigate()

    const [counter, setCounter] = useState(4)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter((prevCount) => prevCount - 1)
        }, 1000)

        const showTimeOut = setTimeout(() => {
            setIsVisible(true)
        }, 940)

        const timeOut = setTimeout(() => {
            navigateTo("/")
        }, 5000)

        // cleanup
        // very important, otherwise the timer don't work well

        return () => {
            clearInterval(interval);
            clearTimeout(showTimeOut)
            clearTimeout(timeOut);
        }

    },[])

    return(
        <>
            <SunriseWrapper>
                <Sunrise></Sunrise>
                <TypoH2 sx={{visibility: isVisible ? "visible" : "hidden"}}>Back to the night in {counter}</TypoH2>
            </SunriseWrapper>    
        </>
    )

}


export default NoMatch;