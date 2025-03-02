import { Box } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {

    const { username } = useParams();

    return (
        <>
            <Box>Hello, world!</Box>
        </>
    )

}