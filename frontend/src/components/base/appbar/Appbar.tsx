import { ClassNames, ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";
import { Box, Button, Fade, Link, Typography } from "@mui/material";
import { accountLinkBox, appbarAccountBox, AppbarContentBoxStyle, AppbarFrameBoxStyle, appbarLinkBox, appbarLinkBoxLeft, appbarLinkBoxRight, appbarLinkColor, appbarMenuBox, AppbarPartBorder } from "./AppbarStyles";

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LoginIcon from '@mui/icons-material/Login';
import QuizIcon from '@mui/icons-material/Quiz';
import { TypeSpecimenOutlined } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import AppbarMenu from "./appbarMenu/AppbarMenu";
import { AppbarAccountFrame } from "./appbarAccountFrame/AppbarAccountFrame";
import { useEffect, useState } from "react";
import { useAsyncError } from "react-router-dom";
import { outerBox } from "./appbarAccountFrame/appbarAccountFrameStyles";
import LoginForm from "../../form/loginForm/LoginForm";
import { VerticalCentered } from "../baseStyles";








export default function Appbar() {


  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    console.log("handleClick", flag)
    setFlag(true)
  }



const putOverlays = () => {

  const overlayElements = []

  
  for(let t = 0; t < 100; t += 10) {
    for(let i = 0; i < 50; i += 10) {

    overlayElements.push(
        <Fade in={flag} timeout={((i * 10) + 1000)}  key={`left-${i}-${t}`}>
          <Box sx={{
            position: 'absolute',
            left: `${i}%`,
            top: `${t}%`,
            //transform: `translate(${i}%, ${i}%)`,
            height: `10%`,
            width: `10%`,   
            backgroundColor: 'black',
            zIndex: '1000',


                  }}>
                  
          </Box>
        </Fade>
    )
  }
}


  for(let t = 0; t < 100; t += 10) {
    for(let i = 0; i < 50; i += 10) {

      console.log("i" , i * 10 + 1000)

    overlayElements.push(
        <Fade in={flag} timeout={((i * 10) + 1000)} key={`right-${i}-${t}`}>
          <Box sx={{
            position: 'absolute',
            right: `${i}%`,
            bottom: `${t}%`,
            //transform: `translate(${i}%, ${i}%)`,
            height: `10%`,
            width: `10%`,   
            backgroundColor: 'black',
            zIndex: '1000',

                  }}>
                    
          </Box>
        </Fade>
    )
  }
}
/*
  overlayElements.push(
    <Fade in={flag} timeout={2000}>
          <Box sx={{
            position: 'absolute',
            right: `0%`,
            bottom: `0%`,
            //transform: `translate(${i}%, ${i}%)`,
            height: `100%`,
            width: `100%`,   
            backgroundColor: 'black',

            zIndex: '1000',

            display: 'flex',
            justifyContent: 'center',
            
                  }}>
                      <LoginForm></LoginForm>
          </Box>
    </Fade>
  )
*/


  {/* loginForm */}
  overlayElements.push(
    <Fade in={flag} timeout={(1500)}>
          <Box sx={{
            position: 'absolute',
            left: `50%`,
            bottom: `50%`,
            transform: `translate(-50%, 50%)`,
            height: `40%`,
            width: `40%`,   
            backgroundColor: 'black',

            zIndex: '1000',

            display: 'flex',
            justifyContent: 'center',
            borderRadius: '20%',
          
                  }}>
                      
                      <LoginForm/>
          </Box>
    </Fade>
  )



return <>{overlayElements}</>
}
  


const putOverlays2 = () => {

  const overlayElements = []

  
  for(let t = 0; t < 100; t += 5) {
    for(let i = 0; i < 50; i += 5) {

    overlayElements.push(
        <Fade in={flag} timeout={((i * 30) + 1000)}  key={`left-${i}-${t}`}>
          <Box sx={{
            position: 'absolute',
            left: `${i}%`,
            top: `${t}%`,
            //transform: `translate(${i}%, ${i}%)`,
            height: `5%`,
            width: `5%`,   
            backgroundColor: 'black',
            zIndex: '1000',



                  }}>
                  
          </Box>
        </Fade>
    )
  }
}


  for(let t = 0; t < 100; t += 5) {
    for(let i = 0; i < 50; i += 5) {

      console.log("i" , i * 10 + 1000)

    overlayElements.push(
        <Fade in={flag} timeout={((i * 30) + 1000)} key={`right-${i}-${t}`}>
          <Box sx={{
            position: 'absolute',
            right: `${i}%`,
            bottom: `${t}%`,
            //transform: `translate(${i}%, ${i}%)`,
            height: `5%`,
            width: `5%`,   
            backgroundColor: 'black',
            zIndex: '1000',


                  }}>
                    
          </Box>
        </Fade>
    )
  }
}
/*
  overlayElements.push(
    <Fade in={flag} timeout={2000}>
          <Box sx={{
            position: 'absolute',
            right: `0%`,
            bottom: `0%`,
            //transform: `translate(${i}%, ${i}%)`,
            height: `100%`,
            width: `100%`,   
            backgroundColor: 'black',

            zIndex: '1000',

            display: 'flex',
            justifyContent: 'center',
            
                  }}>
                      <LoginForm></LoginForm>
          </Box>
    </Fade>
  )
*/


  {/* loginForm */}
  overlayElements.push(
    <Fade in={flag} timeout={(1300)}>
          <Box sx={{
            position: 'absolute',
            left: `50%`,
            bottom: `50%`,
            transform: `translate(-50%, 50%)`,
            height: `40%`,
            width: `40%`,   
            backgroundColor: 'black',

            zIndex: '1000',

            display: 'flex',
            justifyContent: 'center',
            borderRadius: '20%',
          
                  }}>
                      
                      <LoginForm/>
          </Box>
    </Fade>
  )



return <>{overlayElements}</>
}


  return (
    <>
      {putOverlays2()}
        <Box id="AppbarFrameBox" sx={AppbarFrameBoxStyle}>
          <Box id="AppbarContentBox" sx={AppbarContentBoxStyle}>
            <Box id="AppbarLinkBoxLeft" sx={appbarLinkBoxLeft}>
              <Link href="/home" sx={appbarLinkColor}>
                <Typography className="AppbarTypo">home</Typography>

              </Link>
              <Link href="/find" sx={appbarLinkColor}>
                <Typography className="AppbarTypo">find</Typography>

              </Link>
              <Link href="/contact" sx={appbarLinkColor}>
                <Typography className="AppbarTypo">contact</Typography>

              </Link>
              <Link href="/test" sx={appbarLinkColor}>
                <Typography className="AppbarTypo">test</Typography>

              </Link>
            </Box>
            <Box id="appbarLinkBoxRight" sx={appbarLinkBoxRight}>
              {/* <Link href="/login" sx={appbarLinkColor}> */}
              <Link sx={appbarLinkColor} onClick={handleClick}>
                <Box id="accountLinkBox" sx={accountLinkBox}>
                  <PersonIcon></PersonIcon>
                  <Typography className="AppbarTypo">Mein Konto</Typography>
                </Box>  
              </Link>
            </Box>
          </Box>
        </Box>
    </>
  );
}