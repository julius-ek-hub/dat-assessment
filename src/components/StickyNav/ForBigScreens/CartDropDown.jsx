import { useState } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MuiMenu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";

import Cart from "../../Cart";
import CatBadge from "../../Cart/CartBadge";
import Center from "../../utils/Center";

function CartDropdown() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleClose = (e) => {
        setAnchorEl(null);
    }

    return (
        <>
            <Center gap={2}>
                <Button color="secondary" onClick={handleOpen}>
                    <CatBadge />
                </Button>
                <Button variant="contained">Login</Button>
            </Center>
            <MuiMenu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                onClose={handleClose}>
                <Box width={400} py={3} px={4}>
                    <Typography variant="h4" fontWeight="bold">Cart</Typography>
                    <Cart />
                </Box>
            </MuiMenu>
        </>
    );
}

export default CartDropdown;
