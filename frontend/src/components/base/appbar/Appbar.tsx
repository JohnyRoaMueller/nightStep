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
} from "./Appbar.styles";
import { fadeInLogin }  from "../../../functions/animations/fadeInLogin/FadeInLogin";




export function Appbar() {
  const [fadeFlag, setFadeFlag] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [userdata, setUserdata] = useState("")
  

  const handleClick = () => {
    setFadeFlag(true);
  };

  const handleClearIconClick = () => {
    setFadeFlag(false);
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken")
    console.log("jwtToken: ", jwtToken)

    if (jwtToken && jwtToken !== "" && jwtToken !== undefined) {
      setIsLoggedIn(true)
      console.log("fetch aus Appbar")
      fetch('http://10.0.2.24:8080/api/userdata', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': 'Bearer ' + jwtToken // Include the jwtToken in the Authorization header
        }
      })
      .then(async (response) => {
        const userdata = await response.text()
        setUserdata(userdata)
      })
    }
  }, [])

  return (
    <>
      {fadeInLogin({ fadeFlag, userdata, handleClearIconClick })}

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
                    <TypoBody1HOM>{isLoggedIn ? userdata : "Mein Konto"}</TypoBody1HOM> {/* HOM -> HiddenOnMobile */}
                  </AccountLinkBox>
              </AppbarLink>
            </AppbarLinkBoxRight>
        </AppbarContent>
      </AppbarFrame>
    </>
  );
}

