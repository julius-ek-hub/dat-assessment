import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

import { alpha } from "@mui/material/styles";

import Arrow from '../../../utils/icons/Arrow';
import ExtraFeatures from '../../../ExtraFeatures';
import CheckoutButton from "../../../Cart/CheckoutButton";

import useMediaQuery from "../../../../hooks/useMediaQuery";

/**
 * @param {DrawerProps} props 
 */

function Drawer(props) {

    const { sm } = useMediaQuery();

    const { onClose, children, ...rest } = props;

    return (
        <MuiDrawer
            anchor="right"
            componentsProps={{
                backdrop: {
                    style: {
                        backgroundColor: alpha('#fff', 0.1),
                        backdropFilter: 'blur(10px)'
                    }
                }
            }}
            onClose={onClose}
            {...rest}>
            <Stack
                width={sm ? 500 : '100vw'}
                px={2}
                height="100%">
                <Box display="flex" m={2}>
                    <ExtraFeatures />
                    <Button
                        onClick={onClose}
                        sx={{ ml: 'auto', px: 1.5 }}
                        color="secondary">
                        Close
                        <Arrow />
                    </Button>
                </Box>
                <Box flexGrow={1} overflow="auto">{children}</Box>
                <CheckoutButton sx={{ mb: 1 }} />
            </Stack>
        </MuiDrawer>
    );
}

export default Drawer;