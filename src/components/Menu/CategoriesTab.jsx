import { useEffect, useMemo, useState } from "react";

import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from "@mui/material/Typography";

import Center from "../utils/Center";
import Image from "../utils/Image";

import useLocalStorage from "../../hooks/useLocalStorage";

/**
 * @param {TabsProps} props 
 */

function CategoriesTab(props) {
    const [categories, setCategories] = useState([]);

    const { getCategories } = useLocalStorage();

    const { onChange, active, ...rest } = props;

    const doSetCategories = async () => {
        if (categories.length > 0) return;
        const _categories = await getCategories();
        setCategories(_categories);
        onChange({}, 0);
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

    return (
        <Tabs
            value={active}
            onChange={onChange}
            {...rest}>
            {allCategories}
        </Tabs>
    );
}

export default CategoriesTab;