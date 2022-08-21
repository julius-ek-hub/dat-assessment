import Typography from "@mui/material/Typography";

import WithWrapper from "../utils/Wrapper";
import Center from "../utils/Center";
import Form from "./Form";
import StyledRegisterSection from './Styled';

import useMediaQuery from "../../hooks/useMediaQuery";

function Registration() {
    const { md } = useMediaQuery();

    return (
        <WithWrapper
            component="section"
            mt={4}
            id="register-section">
            <StyledRegisterSection
                children-width={md ? '48%' : '100%'}
                component="section"
                sx={{
                    ...(md && { bgcolor: 'lightBg.main' }),
                    p: md ? 4 : 1,
                    flexWrap: md ? 'nowrap' : 'wrap',
                }}>
                <Center>
                    <Typography variant="h3" fontWeight="bold">Receive payments quickly from anywhere</Typography>
                    <Typography color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt
                    </Typography>
                </Center>
                <Center>
                    <Typography
                        variant="h4"
                        color="primary.main"
                        fontWeight="bold">Get Started for Free</Typography>
                    <Form />
                </Center>
            </StyledRegisterSection>
        </WithWrapper>
    );
}

export default Registration;
