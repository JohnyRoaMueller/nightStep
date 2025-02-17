import { Fade } from "@mui/material";
import LoginForm from "../../../components/form/loginForm/LoginForm";
import { OverlayLeft, OverlayRight, LoginBox, ClearIconStyled, LoginLogoutBox } from "./fadeInLoginStyles";

type fadeInLoginFancyprops = {
    fadeFlag: boolean;
    userdata: string;
    handleClearIconClick: () => void;
};

export const fadeInLogin = ({ fadeFlag, userdata, handleClearIconClick }: fadeInLoginFancyprops) => {
    if (!fadeFlag) return null;

    const overlayElements = [];

    // Overlay für die linke Seite
    for (let LeftL = 0; LeftL <= 25; LeftL += 25) {
        for (let TopL = 0; TopL <= 75; TopL += 25) {
            overlayElements.push(
                <Fade in={fadeFlag} timeout={(500 - (TopL * 10))} key={`left-${LeftL}-${TopL}`}>
                    <OverlayLeft left={LeftL} top={TopL} />
                </Fade>
            );
        }
    }

    // Overlay für die rechte Seite
    for (let rightR = 0; rightR <= 25; rightR += 25) {
        for (let BottomR = 0; BottomR <= 75; BottomR += 25) {
            overlayElements.push(
                <Fade in={fadeFlag} timeout={(500 - (BottomR * 10))} key={`right-${rightR}-${BottomR}`}>
                    <OverlayRight right={rightR} bottom={BottomR} />
                </Fade>
            );
        }
    }

    // Login Box
    overlayElements.push(
        <Fade in={fadeFlag} timeout={1000}>
                 <LoginLogoutBox>
                    <ClearIconStyled key="login-register-transition-appbar-clear-icon" onClick={handleClearIconClick}/>
                    <LoginForm></LoginForm>
                </LoginLogoutBox>
        </Fade>
    );

    return <>{overlayElements}</>;
};