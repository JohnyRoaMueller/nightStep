import { Box, Grid, Paper, Link, Typography } from "@mui/material";
import { FooterGridBox, FooterImgBox, footerLinkColor, GridWrapper, linkColor, singleGrid } from "./FooterStyles";

import  logo  from "../../../assets/pics/clubStep-Logo.jpg"
import { red } from "@mui/material/colors";

/*

export default function Footer() {
    return (
    <Box id="FooterBox" sx={FooterBox}>
        <Box id="FooterImgBox" sx={FooterImgBox}>
          <img src={logo} alt="ClubStep Logo"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          </img>
        </Box>
        <Box id="FooterFirstTextBox" sx={FooterTextBox}>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
        </Box>
        <Box id="FooterSecondTextBox" sx={FooterTextBox}>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
            <Link sx={space} href="#">Link</Link>
        </Box>
    </Box>
    )
}

*/

export default function Footer() {
    return (
        <Box id="FooterBox" sx={FooterGridBox}>
            <Grid container spacing={0} sx={GridWrapper} >
                <Grid item xs={4} sx={singleGrid} >
                    <Box id="FooterImgBox" sx={FooterImgBox}>
                        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }}></img>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={singleGrid}>
                    <Link href="#" sx={footerLinkColor}>PseudoLink</Link>
                    <Link href="#" sx={footerLinkColor}>PseudoLink</Link>
                    <Link href="#" sx={footerLinkColor}>PseudoLink</Link>
                    <Link href="#" sx={footerLinkColor}>PseudoLink</Link>
                </Grid>
                <Grid item xs={4} sx={singleGrid}>
                    <Link href="#" sx={footerLinkColor}>PseudoLink</Link>
                    <Link href="#" sx={footerLinkColor}>PseudoLink</Link>
                    <Link href="#" sx={footerLinkColor}>PseudoLink</Link>
                    <Link href="#" sx={footerLinkColor}>PseudoLink</Link>
                </Grid>
            </Grid>
        </Box>
    )
}