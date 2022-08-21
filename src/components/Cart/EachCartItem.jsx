import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import CartChanges from "./CartChanges";
import Image from "../utils/Image";

import useCart, { cart_data_props } from "../../hooks/useCart";

/**
 * @param {BoxProps & {item: cart_data_props}} props 
 */

function EachCartItem(props) {

    const { remove } = useCart();

    const { item, ...rest } = props;

    return (
        <Box {...rest}>
            <Stack direction="row" key={item.slug}>
                <Image
                    src={item.image}
                    alt={item.title}
                    height={50}
                    loadingProps={{
                        height: 50,
                        width: 50,
                        sx: { flexShrink: 0 },
                        variant: 'circular'
                    }} />
                <Stack width="100%" mx={4}>
                    <Typography>{item.title}</Typography>
                    <CartChanges item={item} />
                </Stack>
            </Stack>
            <Button color="error" onClick={() => remove(item, true)}>Remove</Button>
        </Box>
    );
}

export default EachCartItem;