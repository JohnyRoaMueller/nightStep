import { Box, Button, TextField, Typography } from "@mui/material";
import { loginFormContainer, loginFormTextField, LoginFormTypoBox } from "./loginFormStyles";
import { Link } from "react-router-dom";



function LoginForm() {
    return (
        <form>
            <Box id={"LoginFormContainer"} sx={loginFormContainer}>
                <Box id={"LoginFormTypoBox"} sx={LoginFormTypoBox}>
                    <TextField label="Benutzername" variant="standard"></TextField>
                    <TextField label="Password" variant="standard"></TextField>
                </Box>
                <Box sx={{paddingTop: '10%'}}>
                    <Button type="submit">login</Button>
                </Box>
                <Box>
                    <Link to="/register">
                        <Button sx={{marginTop: '15%'}}>
                            <Typography>
                                sign up here
                            </Typography>
                        </Button>
                    </Link>
                </Box>
            </Box>
        </form>
)}

export default LoginForm