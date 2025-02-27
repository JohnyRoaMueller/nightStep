import { Box, Button, inputClasses } from "@mui/material";
import Base from "../components/base/base";

const doClear = () => {
    localStorage.clear();
}

const sendCookie = () => {
    fetch("http://192.168.178.28:8080/api/userdata", {
        credentials: "include"
    })
}

    const logout = () => {
        fetch(// "http://192.168.178.28:8080/api/logout", {
                "http://10.0.2.24:8080/api/logout", {
            credentials: "include"
        })   
}

{/* Component to test ideas */}

export default function Test() {


    return (
      <Base children={
        <>
                {/* ↓↓↓ My Content ↓↓↓ */}
                <Box>
                    my test content
                </Box>
                <Box>
                    <Button onClick={doClear} sx={{backgroundColor: 'black', margin: "10%"}}>
                        clear localstorage
                    </Button>
                </Box>
                <Box>
                    <Button onClick={sendCookie} sx={{backgroundColor: 'black', margin: "10%"}}>
                        send Cookie
                    </Button>
                </Box>
                <Box>
                    <Button onClick={logout} sx={{backgroundColor: 'black', margin: "10%"}}>
                        delete Cookie
                    </Button>
                </Box>
                {/* ↑↑↑ My Content ↑↑↑ */}
                </>
        }>
        </Base>
    )
}