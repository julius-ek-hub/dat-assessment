import Typography from "@mui/material/Typography";
import Stack, { StackProps } from "@mui/material/Stack";
import MuiIconButton from "@mui/material/IconButton";


import PlusIcon from "../utils/icons/Plus";
import MinusIcon from "../utils/icons/Minus";

import useCart, { cart_data_props } from "../../hooks/useCart";

/**
 * @param {StackProps & {item: cart_data_props, size: 'small' | 'large' | 'medium'}} props 
 */

const CartChanges = (props) => {

    const { add, remove, cart } = useCart();

    const { item, size, ...rest } = props;

    const target = cart.find(c => c.slug === item.slug);

    const IconButton = (props) => <MuiIconButton  {...props} size={size} />

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            {...rest}>
            <IconButton
                onClick={() => remove(target)}><MinusIcon /></IconButton>
            <Typography>{target.quantity}</Typography>
            <IconButton
                onClick={() => add(target)}
                disabled={target.quantity === target.availableQuantity}><PlusIcon /></IconButton>
            <Typography
                color="text.secondary"
                minWidth={50}
                textAlign="center">
                {target.currency + (target.quantity * target.price).toFixed(2)}
            </Typography>
        </Stack>
    )
}

export default CartChanges;