import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummery from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";

import MenuIcon from "../../../utils/icons/Menu";
import Cart from "../../../Cart";
import CatBadge from "../../../Cart/CartBadge";
import Drawer from "./Drawer";

import useCart from "../../../../hooks/useCart";

import * as scrollers from "../scollers";

function ForSmallScreens() {

    const [open, setOpen] = useState(false);
    const { count } = useCart();


    return (
        <>
            <IconButton sx={{ m: 1 }} onClick={() => setOpen(true)}>
                <Badge badgeContent={count} color='error'>
                    <MenuIcon />
                </Badge>
            </IconButton>
            <Drawer
                open={open}
                sx={{ display: 'flex' }}
                onClose={() => setOpen(false)}>
                <MenuItem onClick={scrollers.scrollToTop.bind({})} >Home</MenuItem>
                <MenuItem onClick={scrollers.scrollToRegister.bind({})} >Form</MenuItem>
                <MenuItem onClick={scrollers.scrollToMenu.bind({})} >Menu</MenuItem>
                <MenuItem onClick={() => setOpen(false)} >Login</MenuItem>
                <Divider sx={{ mt: 1 }} />
                <Accordion elevation={0}>
                    <AccordionSummery>
                        <CatBadge /> <Typography variant="h6" ml={1.5}>Cart</Typography>
                    </AccordionSummery>
                    <AccordionDetails>
                        <Cart />
                    </AccordionDetails>
                </Accordion>
                <Divider />
            </Drawer>

        </>
    );
}

export default ForSmallScreens;