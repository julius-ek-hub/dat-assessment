import Box, { BoxProps } from "@mui/material/Box";

import useMediaQuery from "../../hooks/useMediaQuery";

/**
 * Wraps children in a padding box depending on screen size
 * @param {BoxProps} props 
 */

const Wrapper = (props) => {
    const { md } = useMediaQuery();

    return (
        <Box px={md ? '10rem' : "2rem"} {...props} />
    )
};

export default Wrapper;