import Badge from "@mui/material/Badge";

import CartIcon from "../utils/icons/Cart";

import useCart from "../../hooks/useCart";

const CartBadge = () => {
    const { count } = useCart();
    return (
        <Badge badgeContent={count} color="error">
            <CartIcon color='inherit' />
        </Badge>
    )
}

export default CartBadge;