import Button, { ButtonProps } from "@mui/material/Button";
import Box from "@mui/material/Box";

import CatDropdown from "./CartDropDown";
import ExtraFeatures from "../../ExtraFeatures";

import * as scrollers from "../scollers";

/**
 * @param {ButtonProps} props 
 */

const NavItem = (props) => {
    const { title, ...rest } = props;
    return (
        <Box component="li" sx={{
            position: 'relative !important',
            '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                height: '2.4px',
                left: 0,
                right: '100%',
                transition: '200ms right',
                bgcolor: theme => theme.palette.primary.main
            },
            '&:hover': {
                '& button': {
                    backgroundColor: 'unset'
                },
                '&::before': {
                    right: 0
                }
            }
        }}>
            <Button color="secondary" {...rest}>{title}</Button>
        </Box>
    )
};

const ForBigScreens = () => (
    <>
        <Box component="ul">
            <ExtraFeatures />
            <NavItem title="Home" onClick={scrollers.scrollToTop.bind({})} />
            <NavItem title="Form" onClick={scrollers.scrollToRegister.bind({})} />
            <NavItem title="Menu" onClick={scrollers.scrollToMenu.bind({})} />
        </Box>
        <CatDropdown />
    </>
);

export default ForBigScreens;
