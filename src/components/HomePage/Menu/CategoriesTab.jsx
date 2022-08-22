import { useEffect, useMemo, useState } from "react";

import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import Center from "../../utils/Center";
import Image from "../../utils/Image";
import ArrowIcon from "../../utils/icons/Arrow";

import useLocalStorage from "../../../hooks/useLocalStorage";
import useMediaQuery from "../../../hooks/useMediaQuery";

/**
 * @param {TabsProps} props 
 */

function CategoriesTab(props) {
    const [categories, setCategories] = useState([]);

    const { getCategories } = useLocalStorage();

    const { onChange, active, orientation, ...rest } = props;

    const horizontal = orientation === 'horizontal';

    const doSetCategories = async () => {
        if (categories.length > 0) return;
        const _categories = await getCategories();
        setCategories(_categories);
        onChange({}, 0);
    }

    const handleChangeByArrow = (direction) => {
        let newActive = active + direction;

        if (newActive >= categories.length)
            newActive = 0;
        if (newActive < 0)
            newActive = categories.length - 1;

        onChange({}, newActive);
    }

    useEffect(() => { doSetCategories() }, []);

    const allCategories = useMemo(() => categories.map(({ name, icon }, index) => (
        <Tab
            key={index}
            label={(
                <Center gap={1} justifyContent="flex-start !important" width="100%">
                    <Image
                        src={icon}
                        alt={name}
                        width={25}
                        loadingProps={{
                            height: 25,
                            width: 25,
                            variant: 'circular'
                        }} />
                    <Typography>{name}</Typography>
                </Center>
            )}>
        </Tab>
    )), [active, categories]);

    const Arrow = ({ direction = [] }) => (
        <IconButton
            sx={{ height: 40, mx: 2 }}
            onClick={() => handleChangeByArrow(direction.includes('up') ? -1 : 1)}
        >
            <ArrowIcon direction={horizontal ? direction[0] : direction[1]} />
        </IconButton>
    )

    return (
        <Stack direction={horizontal ? "row" : 'column'} alignItems="center">
            <Arrow direction={["left", "up"]} />
            <Tabs
                value={active}
                onChange={onChange}
                orientation={orientation}
                {...rest}>
                {allCategories}
            </Tabs>
            <Arrow direction={["right", "down"]} />
        </Stack>
    );
}

export default CategoriesTab;