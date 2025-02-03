import { Box, Fade } from "@mui/material";
import LoginForm from "../../../components/form/loginForm/LoginForm";
import ClearIcon from '@mui/icons-material/Clear';
import { leftSide, login, rightSide } from "./fadeInLoginStyles";

type fadeInLoginFancyprops = {
    flag: boolean;
    handleClearIconClick: () => void;
};

export const fadeInLogin = ({ flag, handleClearIconClick }: fadeInLoginFancyprops) => {
    if (!flag) return null;

    const overlayElements = [];

    // Overlay für die linke Seite
    for (let LeftL = 0; LeftL <= 25; LeftL += 25) {
        for (let TopL = 0; TopL <= 75; TopL += 25) {
            overlayElements.push(
                <Fade in={flag} timeout={(500 - (TopL * 10))} key={`left-${LeftL}-${TopL}`}>
                    <Box sx={leftSide({ LeftL, TopL })}>
                        {/* optional checking values */}

                    </Box>
                </Fade>
            );
        }
    }

    // Overlay für die rechte Seite
    for (let rightR = 0; rightR <= 25; rightR += 25) {
        for (let BottomR = 0; BottomR <= 75; BottomR += 25) {
            overlayElements.push(
                <Fade in={flag} timeout={(500 - (BottomR * 10))} key={`right-${rightR}-${BottomR}`}>
                    <Box sx={rightSide({ rightR, BottomR })}>
                        {/* optional checking values */}

                    </Box>
                </Fade>
            );
        }
    }

    // Login Box
    overlayElements.push(
        <Fade in={flag} timeout={1000}>
            <Box sx={login}>
                <ClearIcon onClick={handleClearIconClick} />
                <LoginForm />
            </Box>
        </Fade>
    );

    return (<>{overlayElements}</>)
};