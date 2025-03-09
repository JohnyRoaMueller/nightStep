import {  Fade } from "@mui/material";
import LoginForm from "../../../components/form/loginForm/LoginForm";
import { OverlayLeft, OverlayRight, ClearIconStyled, LoginLogoutBox, LoginLogoutOverlay } from "./fadeInLoginStyles";
import UserMenu from "../../../components/usermenu/UserMenu";

type fadeInLoginFancyprops = {
    fadeFlag: boolean;
    isLoggedIn: boolean;
    handleClearIconClick: () => void;
};

export const FadeInLogin = ({ fadeFlag, isLoggedIn, handleClearIconClick }: fadeInLoginFancyprops) => {
    if (!fadeFlag) return null;

    const overlayElements = [];

    // overlay for the left side
    for (let LeftL = 0; LeftL <= 25; LeftL += 25) {
        for (let TopL = 0; TopL <= 75; TopL += 25) {
            overlayElements.push(
                <Fade in={fadeFlag} timeout={(500 - (TopL * 10))} key={`left-${LeftL}-${TopL}`}>
                    <OverlayLeft left={LeftL} top={TopL} />
                </Fade>
            );
        }
    }

    // overlay for the right side
    for (let rightR = 0; rightR <= 25; rightR += 25) {
        for (let BottomR = 0; BottomR <= 75; BottomR += 25) {
            overlayElements.push(
                <Fade in={fadeFlag} timeout={(500 - (BottomR * 10))} key={`right-${rightR}-${BottomR}`}>
                    <OverlayRight right={rightR} bottom={BottomR} />
                </Fade>
            );
        }
    }

    // Content box on Overlays
    overlayElements.push(
        <Fade in={fadeFlag} timeout={1000}>
                 <LoginLogoutOverlay>
                    <LoginLogoutBox>
                        <ClearIconStyled key="login-register-transition-appbar-clear-icon" onClick={handleClearIconClick}/>
                        {isLoggedIn ? <UserMenu></UserMenu> : <LoginForm></LoginForm>}
                    </LoginLogoutBox>
                </LoginLogoutOverlay>
        </Fade>
    );

    return <>{overlayElements}</>;
};