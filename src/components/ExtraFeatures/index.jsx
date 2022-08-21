import { BoxProps } from "@mui/material/Box";

import ThemeSwitch from "./ThemeSwitch";
import ImageLoadingSimulator from "./ImageLoadingSimulator";
import Center from "../utils/Center";

/**
 * @param {BoxProps} props 
 */
function ExtraFeatures(props) {
    return (
        <Center columnGap={2} {...props}>
            <ImageLoadingSimulator />
            <ThemeSwitch />
        </Center>
    );
}

export default ExtraFeatures;