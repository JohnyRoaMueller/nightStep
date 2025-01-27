

import { Box, Grid, Link } from "@mui/material";
import { FooterGridBox, FooterImgBox, footerLinkColor, GridWrapper, marginBox, singleGrid } from "./FooterStyles";

import logo from 'C:\\VS_Code_projects\\clubstep-project\\uploads\\clubstep\\clubStep-Logo.jpg';

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