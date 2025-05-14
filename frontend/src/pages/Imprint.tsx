import Base from "../components/base/base";
import { Box } from "@mui/material";

export default function Imprint() { 
    return(
<Base>
  {/* ↓↓↓ My Content ↓↓↓ */}
  <Box sx={{color: "white", textAlign: "center"}}>
    <Box>
      <p><strong>Imprint</strong></p>
    </Box>
    <Box>
      <p><strong>Information according to § 5 TMG:</strong></p>
    </Box>
    <Box>
      <p><strong>Company Name:</strong> nightStep</p>
      <p><strong>Address:</strong> nightStepStreet 55B</p>
      <p><strong>Phone:</strong> 030/923842432</p>
      <p><strong>Email:</strong> info@nightStep.com</p>
      <p><strong>Website:</strong> nightStep.com</p>
    </Box>
    <Box>
      <p><strong>Authorized Representative:</strong> John Doe</p>
      <p><strong>Commercial Register:</strong> HRB 123456</p>
      <p><strong>VAT ID:</strong> DE123456789</p>
    </Box>
    <Box>
      <p><strong>Disclaimer:</strong></p>
    </Box>
    <Box>
      <p>The content of this website has been created with the utmost care. However, we do not guarantee the accuracy, completeness, or timeliness of the information provided. We are not responsible for external links and their content.</p>
    </Box>
    <Box>
      <p><strong>Copyright:</strong></p>
    </Box>
    <Box>
      <p>All content on this website is subject to copyright law. Any reproduction or distribution requires prior written consent.</p>
    </Box>
  </Box>
  {/* ↑↑↑ My Content ↑↑↑ */}
</Base>

    )
}