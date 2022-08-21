import Typography from "@mui/material/Typography";

import Center from "../../utils/Center";
import Wrapper from "../../utils/Wrapper";

function Footer() {
    return (
        <Wrapper
            bgcolor="lightBg.main"
            component="footer"
            mt={2}>
            <Center p={3}>
                <Typography textAlign="center" color="text.secondary">Copyright &copy; 2022 abcd. All rights reserved</Typography>
            </Center>
        </Wrapper>
    );
}

export default Footer;