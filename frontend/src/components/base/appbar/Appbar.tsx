import { useEffect, useState } from "react";
import {
  AppbarFrame,
  AppbarContent,
  AppbarLinkBoxLeft,
  AppbarLinkBoxRight,
  AccountLinkBox,
  AccountIcon,
  AppbarLink,
  TypoBody1HOM,
  TypoBody1Link,
  AppbarLogoBox,
  NightStepLogo,
  HiddenOnMobile,
} from "./Appbar.styles";
import { FadeInLogin, fadeInLogin }  from "../../../functions/animations/fadeInLogin/FadeInLogin";
import { Box } from "@mui/material";
import { TypoBody1 } from "../../../styled-components/styledTypographie";




export function Appbar() {
  const [fadeFlag, setFadeFlag] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [username, setUsername] = useState("")
  

  const handleClick = () => {
    setFadeFlag(true);
  };

  const handleClearIconClick = () => {
    setFadeFlag(false);
  };

  useEffect(() => {
      console.log("fetch aus Appbar")
      fetch(// 'http://192.168.178.28:8080/api/me', {
              'http://10.0.2.24:8080/api/me', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        credentials: "include",
      })
      .then(async (response) => {
        if(response.ok) {
        const username = await response.text()
        setUsername(username)
        setIsLoggedIn(true)
        } else if (!response.ok) {
          setIsLoggedIn(false)
        }
      })

  }, [])

  return (
    <>
      <FadeInLogin fadeFlag={fadeFlag} isLoggedIn={isLoggedIn} handleClearIconClick={handleClearIconClick} />
      <AppbarFrame>
        <AppbarContent>
          <AppbarLinkBoxLeft>
            <AppbarLogoBox>
              <AppbarLink to={"/home"}>
                <NightStepLogo/>
              </AppbarLink>
            </AppbarLogoBox>
            <AppbarLink to={"/find"}>
              <TypoBody1Link>find</TypoBody1Link>
            </AppbarLink>
            <AppbarLink to={"/test"}>
              <TypoBody1Link>test</TypoBody1Link>
            </AppbarLink>
          </AppbarLinkBoxLeft>

            <AppbarLinkBoxRight>
              <AppbarLink onClick={handleClick} to={"#"}>
                  <AccountLinkBox>
                    <AccountIcon />
                    <TypoBody1>
                      {isLoggedIn ? username : <HiddenOnMobile className="hiddenOnMobile">Mein Konto</HiddenOnMobile>}
                    </TypoBody1> {/* HOM -> HiddenOnMobile */}
                  </AccountLinkBox>
              </AppbarLink>
            </AppbarLinkBoxRight>
        </AppbarContent>
      </AppbarFrame>
    </>
  );
}

