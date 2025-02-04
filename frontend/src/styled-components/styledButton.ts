import { styled, Typography } from "@mui/material";

export const Button = styled(Typography)(({ theme }) => ({
    display: theme.typography.button.display,
    justifyContent: theme.typography.button.justifyContent,
    alignItems: theme.typography.button.alignItems,
    textAlign: theme.typography.button.textAlign,
    fontFamily: theme.typography.button.fontFamily,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    textTransform: theme.typography.button.textTransform,
    color: theme.typography.button.color,
    backgroundColor: theme.typography.button.backgroundColor,
    "&:hover": {
        backgroundColor: '#e67600',
    },
}));