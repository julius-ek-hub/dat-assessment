import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Center from "../../utils/Center";
import Image from "../../utils/Image";

import useMediaQuery from "../../../hooks/useMediaQuery";

function Content() {
    const { lg } = useMediaQuery();

    return (
        <Center minHeight={500}>
            <Box>
                <Typography
                    fontWeight="bold"
                    variant="h2"
                    lineHeight={1}>Different Spice For A Different Tast</Typography>
                <Typography
                    color="text.secondary"
                    my={2}
                    fontSize={20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                </Typography>
                <Button variant="contained" size="large">GET STARTED</Button>
            </Box>
            {lg &&
                <Image
                    src="/header-img.png"
                    alt="Slider Food Image"
                    loadingProps={{
                        height: 400,
                        sx: { flexShrink: 0 },
                        width: 400,
                        variant: 'circular'
                    }} />}
        </Center>
    );
}

export default Content;
