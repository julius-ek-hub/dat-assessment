import MuiCard, { CardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CartChanges from '../Cart/CartChanges';
import CartIcon from '../utils/icons/Cart';
import Image from '../utils/Image';

import useCart, { cart_data_props } from '../../hooks/useCart';


/**
 * @param {CardProps & {data: cart_data_props}} props 
 */

export default function Card(props) {
    const { data, ...rest } = props;

    const { add, inCart } = useCart();

    const incat = inCart(data);

    return (
        <MuiCard sx={{ width: 280, height: 380 }} {...rest}>
            <Image
                height={240}
                width="100%"
                sx={{ objectFit: 'cover' }}
                src={data.image}
                alt={data.title}
                loadingProps={{
                    height: 240,
                    sx: { transform: 'none' }
                }}
            />
            <CardContent sx={{ py: 0, pt: 1 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis">
                    {data.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                    fontSize="1.6rem"
                    display="flex"
                    overflow="hidden"
                    alignItems="center">
                    <Typography
                        component="sup"
                        fontSize="1.6rem"
                        color="primary"
                        mr={0.5}>
                        {data.currency}
                    </Typography>
                    {data.price}
                    {incat && <CartChanges item={data} ml={2} width="70%" size='small' />}
                </Typography>
            </CardContent>
            <CardActions sx={{ py: 0 }}>
                <Button size="large" color="secondary" onClick={() => add(data)} disabled={incat}>
                    Add to cart
                    <CartIcon color='inherit' sx={{ ml: 2 }} />
                </Button>
            </CardActions>
        </MuiCard>
    );
}