import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Center from "../utils/Center";
import EachCartItem from "./EachCartItem";
import JSONCheckout from "./JSONCheckout";

import useCart from "../../hooks/useCart";

/**
 * @param {BoxProps} props
 */
function Cart(props) {

    const { count, cart } = useCart();

    return (
        <Box {...props}>
            {count === 0 ? (
                <Center height={200} >
                    <Typography>
                        Empty
                    </Typography>
                </Center>
            ) : (
                <Stack gap={2} my={2}>
                    {cart.map((c, key) => <EachCartItem key={key} item={c} />)}
                </Stack>
            )}
        </Box>
    );
}

export default Cart;