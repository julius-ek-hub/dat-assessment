import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Center from "../utils/Center";
import EachCartItem from "./EachCartItem";

import useCart from "../../hooks/useCart";

/**
 * @param {BoxProps} props
 */
function Cart(props) {

    const { count, cart, totalCost } = useCart();

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
                    {cart.map((c) => <EachCartItem key={c.slug} item={c} />)}
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ justifyContent: 'space-between', color: 'background.paper' }}>
                        <Typography>Check out</Typography>
                        <Typography>{totalCost.toFixed(2)} $</Typography>
                    </Button>
                </Stack>
            )}
        </Box>
    );
}

export default Cart;