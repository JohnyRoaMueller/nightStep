import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import { Box, Button} from "@mui/material";

import Appbar from "../components/base/appbar/Appbar";
import Footer from "../components/base/footer/Footer";
import { Link } from "react-router-dom";
import Base from "../components/base/base";



export default function Test() {


    return (
        <Base children={
            <>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                my Registration content
            </Box>
            <Box>
                <Link to={"guest"}>
                    <Button>
                        Guest
                    </Button>
                </Link>
            </Box>
            <Box>
                <Link to={"host"}>
                    <Button>
                        Host
                    </Button>
                </Link>
            </Box>
            {/* ↑↑↑ My Content ↑↑↑ */}
            </>
            }>
            </Base>
    )
}