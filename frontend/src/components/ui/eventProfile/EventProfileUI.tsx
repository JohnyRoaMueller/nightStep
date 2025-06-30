import { Box } from "@mui/material"
import { useParams } from "react-router-dom"

function EventProfile() {

    const param = useParams()

    return(
        <>
        <Box>Site of {param.venuename}'s event {param.eventname}</Box>
        </>
    )
}

export default EventProfile