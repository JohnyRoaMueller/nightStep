import { styled, Typography } from "@mui/material";
import theme from "../theme/theme";

export const TypoCaption = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.caption.fontFamily,
    fontSize: theme.typography.caption.fontSize,
    color: theme.typography.caption.color,
}));

export const TypoH1 = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: theme.typography.h1.fontWeight,
    fontSize: theme.typography.h1.fontSize,
    color: theme.typography.h1.color,
}));

export const TypoH2 = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.h2.fontFamily,
    fontWeight: theme.typography.h2.fontWeight,
    fontSize: theme.typography.h2.fontSize,
    color: theme.typography.h2.color,
}));

export const TypoBody1 = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    color: theme.typography.body1.color
}))

export const TypoBody2 = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.body2.fontFamily,
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
    color: theme.typography.body2.color,
}));

