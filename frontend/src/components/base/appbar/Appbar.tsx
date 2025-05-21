import { useEffect, useState } from "react";
import {
  AppbarFrame,
  AppbarContent,
  AccountIcon,
  AppbarLogoBox,
  NightStepLogo,
  HiddenOnMobile,
  AppbarUnfoldMoreIcon,
  MobileMenuOptionsWrapper,
  MobileMenuOption,
  MobileMenuOptionLink,
  TypoBody1MobileMenuOptionLink,
  AccountBox,
  AppbarSearchIcon,
  AppbarIconBoxRight,
} from "./Appbar.styles";
import { FadeInLogin }  from "../../../functions/animations/fadeInLogin/FadeInLogin";
import { useNavigate } from "react-router-dom";
import { Opacity } from "@mui/icons-material";




export function Appbar() {
  const navigateTo = useNavigate();

  const [fadeFlag, setFadeFlag] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");

  const [role, setRole] = useState(null);

  const [unfoldFlag, setUnfolgFlag] = useState(false);
  const unfoldStyle = { height: unfoldFlag ? "5vh" : "0vh", opacity: unfoldFlag ? 1 : 0, transition: "height 0.7s ease, opacity 0.7s ease"}

  const [loading, setLoading] = useState(true)
  

  const handleClick = () => {
    setFadeFlag(true);
  };

  const handleClearIconClick = () => {
    setFadeFlag(false);
  };

  const handleUnfold = () => {
    if ( unfoldFlag == false) {
      setUnfolgFlag(true)
    } else {
      setUnfolgFlag(false)
    }
  }

  const handleClickUnfold = () => {
    if (window.innerWidth <= 678) {
      if (unfoldFlag == false) {
        setUnfolgFlag(true)
      } else {
        setUnfolgFlag(false)
      }
    }
  }

  const mobileOptionsVisitor = ["Search"]
  const mobileOptionsGuest = ["SEARCH", "SAVED EVENTS", "FOLLOWED", "COMMUNITY" ];
  const mobileOptionsHost = ["MY VENUE", "MY EVENTS", "GUESTLIST", "PROMOTE"];

    useEffect(() => {
      async function fetchData() {

      const apiUrl = import.meta.env.VITE_APP_API_URL

      const response = await fetch( `${apiUrl}/me`, {

        method: "GET",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        credentials: "include",
      })
      if (response.ok) 
      {
        const responseJSON = await response.json();
        setUsername(responseJSON.username);
        setRole(responseJSON.role)
        setIsLoggedIn(true)
      }
      else if (!response.ok)
      {
        setIsLoggedIn(false)
      }
      setLoading(false)
    }
    fetchData();
  }, [])

  if (loading) {
    return(
    <>
    
    </>
    )
  }

  else 
  return (
    <>
      <FadeInLogin fadeFlag={fadeFlag} isLoggedIn={isLoggedIn} handleClearIconClick={handleClearIconClick} />
      <AppbarFrame>
        <AppbarContent>
            <AppbarLogoBox>
                <NightStepLogo onClick={() => navigateTo("/")}/>
            </AppbarLogoBox>
          <AppbarIconBoxRight>
          <AppbarSearchIcon onClick={() => navigateTo("/find")}/>
          <AppbarUnfoldMoreIcon onClick={handleClickUnfold} onMouseEnter={handleUnfold} sx={{color: unfoldFlag ? "#ff8000" : "white", display: isLoggedIn ? "block" : "none"}}/>
          <AccountBox onClick={handleClick}>
            <AccountIcon />
            <HiddenOnMobile>
                {isLoggedIn ? username : "Mein Konto"}
            </HiddenOnMobile> {/* HOM -> HiddenOnMobile */}
          </AccountBox>
          </AppbarIconBoxRight>
        </AppbarContent>
      </AppbarFrame>
      <MobileMenuOptionsWrapper onMouseLeave={handleUnfold}>
        {role === "GUEST" && 
        mobileOptionsGuest.map((option) => (
          <MobileMenuOption sx={{display: unfoldFlag ? "block" : "none"}}>
            <MobileMenuOptionLink to={`/${option.toLowerCase()}`}>
              <TypoBody1MobileMenuOptionLink>{option}</TypoBody1MobileMenuOptionLink>
            </MobileMenuOptionLink>
          </MobileMenuOption>
        ))}
        {role === "HOST" && 
        mobileOptionsHost.map((option) => (
          <MobileMenuOption sx={unfoldStyle}>
            <MobileMenuOptionLink to={`/${option}`.replace(" ", "")}>
              <TypoBody1MobileMenuOptionLink>{option.toLowerCase()}</TypoBody1MobileMenuOptionLink>
            </MobileMenuOptionLink>
          </MobileMenuOption>
        ))}
      </MobileMenuOptionsWrapper>
    </>
  );
}


