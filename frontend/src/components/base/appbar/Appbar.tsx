import { useEffect, useState } from "react";
import { Typography, Link } from "@mui/material";
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
} from "./Appbar.styles";
import fadeInLogin from "../../../functions/animations/fadeInLogin/FadeInLogin";

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
      {fadeInLogin({ fadeFlag, handleClearIconClick })}
      <AppbarFrame>
        <AppbarContent>
          <AppbarLinkBoxLeft>
            <AppbarLink to={"/home"}>
              <TypoBody1Link>home</TypoBody1Link>
            </AppbarLink>
            <AppbarLink to={"/find"}>
              <TypoBody1Link>find</TypoBody1Link>
            </AppbarLink>
            <AppbarLink to={"/contact"}>
              <TypoBody1Link>contact</TypoBody1Link>
            </AppbarLink>
            <AppbarLink to={"/test"}>
              <TypoBody1Link>test</TypoBody1Link>
            </AppbarLink>
          </AppbarLinkBoxLeft>

            <AppbarLinkBoxRight>
              <Link onClick={handleClick}>
                  <AccountLinkBox>
                    <AccountIcon />
                    <TypoBody1HOM>{isLoggedIn ? userdata : "Mein Konto"}</TypoBody1HOM> {/* HOM -> HiddenOnMobile */}
                  </AccountLinkBox>
              </Link>
            </AppbarLinkBoxRight>


        </AppbarContent>
      </AppbarFrame>
    </>
  );
}

