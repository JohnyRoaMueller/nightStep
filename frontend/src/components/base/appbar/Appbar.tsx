import { useEffect, useState } from "react";
import {
  AppbarFrame,
  AppbarContent,
  AppbarLinkBoxLeft,
  AppbarLinkBoxRight,
  AccountLinkBox,
  AccountIcon,
  AppbarLink,
  TypoBody1Link,
  AppbarLogoBox,
  NightStepLogo,
  HiddenOnMobile,
  AppbarUnfoldMoreIcon,
  MobileMenuOptionsWrapper,
  MobileMenuOption,
  MobileMenuOptionLink,
  TypoBody1MobileMenuOptionLink,
} from "./Appbar.styles";
import { FadeInLogin }  from "../../../functions/animations/fadeInLogin/FadeInLogin";
import { TypoBody1 } from "../../../styled-components/styledTypographie";




export function Appbar() {
  const [fadeFlag, setFadeFlag] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");

  const [role, setRole] = useState(null);

  const [unfoldFlag, setUnfolgFlag] = useState("none");
  

  const handleClick = () => {
    setFadeFlag(true);
  };

  const handleClearIconClick = () => {
    setFadeFlag(false);
  };

  const handleUnfold = () => {
    if ( unfoldFlag === "none") {
      setUnfolgFlag("block")
    } else {
      setUnfolgFlag("none")
    }
  }

  const mobileOptionsVisitor = ["Search"]
  const mobileOptionsGuest = ["Search", "Saved events", "followed", "community" ];
  const mobileoptionsHost = ["venues", "events", "guest list", "promote"];

    useEffect(() => {
      async function fetchData() {

      const response = await fetch('http://192.168.178.28:8080/api/me', {
             // 'http://10.0.2.24:8080/api/me', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        credentials: "include",
      })
      if (response.ok) 
      {
        const responseJSON = await response.json();
        const role = responseJSON.role;
        setUsername(responseJSON.username);
        setIsLoggedIn(true)
      }
      else if (!response.ok)
      {
        setIsLoggedIn(false)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <FadeInLogin fadeFlag={fadeFlag} isLoggedIn={isLoggedIn} handleClearIconClick={handleClearIconClick} />
      <AppbarFrame>
        <AppbarContent>
          <AppbarLinkBoxLeft>
            <AppbarLogoBox>
              <AppbarLink to={"/"}>
                <NightStepLogo/>
              </AppbarLink>
            </AppbarLogoBox>
            {role === "GUEST" || role === null && (
              <>
                <AppbarLink to={"/find"}>
                  <TypoBody1Link>find</TypoBody1Link>
                </AppbarLink>
              </>
            )}
            {role === "HOST" && (
              <>
                <AppbarLink to={"/find"}>
                  <TypoBody1Link>find</TypoBody1Link>
                </AppbarLink>
              </>
            )}
          </AppbarLinkBoxLeft>
          <AppbarUnfoldMoreIcon onClick={handleUnfold}/>
          <AppbarLinkBoxRight>
              <AppbarLink onClick={handleClick} to={"#"}>
                  <AccountLinkBox>
                    <AccountIcon />
                    <HiddenOnMobile>
                      {isLoggedIn ? username : "Mein Konto"}
                    </HiddenOnMobile> {/* HOM -> HiddenOnMobile */}
                  </AccountLinkBox>
              </AppbarLink>
            </AppbarLinkBoxRight>
        </AppbarContent>
      </AppbarFrame>
      <MobileMenuOptionsWrapper>
              {mobileOptionsGuest.map((option) => (
              <MobileMenuOption sx={{display: unfoldFlag}}>
                <MobileMenuOptionLink to={`/${option}`}>
                  <TypoBody1MobileMenuOptionLink>{option}</TypoBody1MobileMenuOptionLink>
                </MobileMenuOptionLink>
              </MobileMenuOption>
              ))}
      </MobileMenuOptionsWrapper>
    </>
  );
}

