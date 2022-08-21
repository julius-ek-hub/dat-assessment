import Box, { BoxProps } from "@mui/material/Box";

import useMediaQuery from "../../hooks/useMediaQuery";

/**
 * Wraps children in a padding box depending on screen size
 * @param {BoxProps} props 
 */

const Wrapper = (props) => {
    const { md, lg } = useMediaQuery();

    return (
        <Box px={lg ? '10rem' : md ? '5rem' : "2rem"} {...props} />
    )
};

export default Wrapper;