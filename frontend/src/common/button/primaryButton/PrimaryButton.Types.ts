import { ButtonProps } from "@mui/material"
import { ReactNode } from "react"

type PrimaryButtonProps = ButtonProps & {
    children: ReactNode
}

export default PrimaryButtonProps