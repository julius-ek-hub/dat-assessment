import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useCart from '../../hooks/useCart';

/**
 * Returns the entire store info as a JSON UI
 * @param {BoxProps} props
 */
function RawJSONStore(props) {
    const { cart } = useCart();

    return (
        <Box component="code" {...props}>
            {'['}
            {cart.map((c, key) => (
                <Box key={key} ml={4}>
                    <Box>{'{'}</Box>
                    {Object.entries(c).map(e => {
                        const key = e[0];
                        const value = e[1];
                        return (
                            <Box key={key} ml={4}>
                                "{key}":
                                <Typography
                                    component="span"
                                    color="success.main"
                                    fontWeight="bold"
                                    ml={1}>
                                    {typeof value === 'string' ? `"${value}"` : value},
                                </Typography>
                            </Box>
                        )
                    })}
                    <Box>{'},'}</Box>
                </Box>
            ))
            }
            {']'}
        </Box>
    );
}

export default RawJSONStore;