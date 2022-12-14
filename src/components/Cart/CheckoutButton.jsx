import { useState } from "react";

import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummery from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from '@mui/material/Typography'

import RawJSONStore from "./RawJSONStore";

import useCart from '../../hooks/useCart';

/**
 * @param {AccordionProps} props
 */

function CheckoutButton(props) {
    const { totalCost, count } = useCart();

    return (
        <Accordion elevation={0} disableGutters {...props}>
            <AccordionSummery disabled={count === 0} sx={{
                bgcolor: 'primary.main',
                color: 'common.white'
            }}>
                <Typography>Check out</Typography>
                <Typography ml="auto">{totalCost.toFixed(2)} $</Typography>
            </AccordionSummery>
            <AccordionDetails sx={{
                overflow: 'auto',
                maxHeight: 400
            }}>
                <RawJSONStore />
            </AccordionDetails>
        </Accordion>
    );
}

export default CheckoutButton;