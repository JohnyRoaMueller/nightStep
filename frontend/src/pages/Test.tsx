
import { Box, Button } from "@mui/material";
import { useScroll, animated } from '@react-spring/web'

import Base from "../components/base/base";

const doClear = () => {
    localStorage.clear();
}



export default function Test() {

    const { scrollYProgress } = useScroll()


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
                <Box sx={{margin: '500px', border: '5px solid red'}}>
                    <animated.div style={{ opacity: scrollYProgress }}>
                        Hello World
                    </animated.div>
                </Box>
                {/* ↑↑↑ My Content ↑↑↑ */}
                </>
        }>
        </Base>
    )
}