import { useState } from "react";
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
} from "./AppbarStyles";
import fadeInLogin from "../../../functions/animations/fadeInLogin/FadeInLogin";
import { TypoBody1 } from "../../../styled-components/styledTypographie";

export default function Appbar() {
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(true);
  };

  const handleClearIconClick = () => {
    setFlag(false);
  };

  return (
    <>
      {fadeInLogin({ flag, handleClearIconClick })}
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
                  <TypoBody1HOM>Mein Konto</TypoBody1HOM> {/* HOM -> HiddenOnMobile */}
                </AccountLinkBox>
            </Link>
          </AppbarLinkBoxRight>
        </AppbarContent>
      </AppbarFrame>
    </>
  );
}