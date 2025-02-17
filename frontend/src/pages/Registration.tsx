
import { Box, Button} from "@mui/material";


import { Link } from "react-router-dom";
import Base from "../components/base/base";
import RegistrationUI from "../components/ui/registrationUI/RegistrationUI";



export default function Registration() {


    return (
        <Base children={
            <>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <RegistrationUI/>
            {/* ↑↑↑ My Content ↑↑↑ */}
            </>
            }>
        </Base>
    )
}