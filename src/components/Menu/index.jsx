import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import WithWrapper from '../utils/Wrapper';
import CategoriesTab from './CategoriesTab';
import CategoryData from './CategoryData'

import useMediaQuery from '../../hooks/useMediaQuery';

export default function Menu() {
    const [active, setActive] = useState(0);
    const { md } = useMediaQuery();

    const handleChange = (event, newValue) => {
        setActive(newValue);
    };

    return (
        <WithWrapper
            mt={4}
            component="section"
            id="menu-section">
            <Typography
                variant='h3'
                fontWeight="bold">
                Our Popular Menu
            </Typography>
            <Typography
                color="text.secondary"
                fontSize={25}
                {...(md && { maxWidth: "70%" })}
                my={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
            </Typography>
            <Stack direction={md ? 'row' : 'column'}>
                <CategoriesTab
                    active={active}
                    onChange={handleChange}
                    orientation={md ? 'vertical' : 'horizontal'} />
                <CategoryData
                    onChange={handleChange}
                    active={active}
                    flexGrow={1}
                    {...(!md && { mt: 2 })} />
            </Stack>
        </WithWrapper>
    );
}
