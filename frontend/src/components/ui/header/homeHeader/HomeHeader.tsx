import { Box, Typography } from "@mui/material";
import { HomeHeaderBox, HomeHeaderTypo } from "./HomeHeaderStyles";


export function HomeHeader() {
    return(
        <>
            <Box sx={HomeHeaderBox}>
                <Typography sx={HomeHeaderTypo}>
                Discover the hottest clubs in town! Experience the best nightlife, exclusive events, and unforgettable parties every night!
                </Typography>
            </Box>
        </>
    )
}