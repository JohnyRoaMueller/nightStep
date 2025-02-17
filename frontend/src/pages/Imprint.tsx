import Base from "../components/base/base";
import { Box } from "@mui/material";

export default function Imprint() { 
    return(
        <Base>
        {/* ↓↓↓ My Content ↓↓↓ */}
        <Box>
          <p><strong>Impressum</strong></p>
        </Box>
        <Box>
          <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        </Box>
        <Box>
          <strong>nightStep</strong>  
        </Box>
        {/* ↑↑↑ My Content ↑↑↑ */}
      </Base>
    )
}