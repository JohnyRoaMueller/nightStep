import { Box, Button } from "@mui/material";
import Base from "../components/base/base";

const doClear = () => {
    localStorage.clear();
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
                    <Button onClick={doClear} sx={{backgroundColor: 'black'}}>
                        clear localstorage
                    </Button>
                </Box>
                {/* ↑↑↑ My Content ↑↑↑ */}
                </>
        }>
        </Base>
    )
}