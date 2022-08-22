import { useEffect, useMemo, useRef, useState } from "react";

import { BoxProps } from "@mui/material/Box";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

import { StylCategoryData } from "./Styled";
import Card from "./Card";
import CategoryDataLoading from "./LoadingIndicator";
import ArrowIcon from "../../utils/icons/Arrow";
import ReloadIcon from "../../utils/icons/Reload";
import Center from "../../utils/Center";

import useLocalStorage from "../../../hooks/useLocalStorage";
import useMediaQuery from "../../../hooks/useMediaQuery";

/**
 * @param {IconButtonProps} props 
 */

const Reload = props => (
    <Center height={200} width="100%" flexDirection="column">
        <Typography> Reload Data</Typography>
        <IconButton title="Reload category data" {...props}><ReloadIcon /></IconButton>
    </Center>
)

/**
 * @param {BoxProps & {active: Number}} props 
 */

function CategoryData(props) {
    const [categoryData, setCategorayData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [failed, setFailed] = useState(false);
    const [categoriesCount, setCategoriesCount] = useState(null);
    const { sm } = useMediaQuery();

    const defaultXMscreenArrowStyle = {
        top: 0,
        bottom: 0,
        position: 'absolute'
    }

    const { active, onChange, ...rest } = props;

    /**
     * @type {{current: HTMLDivElement}}
     */
    const scrollableRef = useRef();

    const { getCategoryData, getCategories } = useLocalStorage();

    const doSetCategoryData = async () => {
        try {
            setLoading(true);
            setFailed(false);
            const categories = await getCategories();
            const _categoryData = await getCategoryData(categories[active].slug);
            setCategorayData(_categoryData);
            setCategoriesCount(categories.length);
        } catch (e) {
            setFailed(true);
        } finally {
            setLoading(false);
        }
    }

    const handleScroll = (direction) => {
        const scrollable = scrollableRef.current.children[1];

        scrollable.scrollTo({
            left: scrollable.scrollLeft + direction * scrollable.clientWidth,
            behavior: 'smooth'
        });

        let newActive = active + direction;

        if (newActive >= categoriesCount)
            newActive = 0;
        if (newActive < 0)
            newActive = categoriesCount - 1;

        const totalScroll = scrollable.scrollLeft + scrollable.clientWidth;

        if ((totalScroll === scrollable.scrollWidth && direction > 0) ||
            (totalScroll === scrollable.clientWidth && direction < 0))
            onChange({}, newActive);

    }

    useEffect(() => { doSetCategoryData() }, [active])

    const allCategoryData = useMemo(() => categoryData.map((data, index) => (
        <Card key={index} data={data} />
    )), [active, categoryData]);


    const Arrow = ({ direction = 1 }) => (
        <Box onClick={() => handleScroll(direction)} {...(!sm && {
            ...defaultXMscreenArrowStyle,
            ...(direction > 0 ? { right: 0 } : { left: 0, }),
            sx: {
                backgroundImage: theme => {
                    return `linear-gradient(to ${direction > 0 ? 'right' : 'left'
                        }, transparent, ${theme.palette.background.paper})`
                }
            }
        })}>
            <IconButton disabled={(loading || failed)}>
                <ArrowIcon color="inherit" direction={direction < 0 ? 'left' : 'right'} />
            </IconButton>
        </Box>
    )

    return (
        <StylCategoryData ref={scrollableRef} {...rest}>
            <Arrow direction={-1} />
            <Box>
                {loading ?
                    <CategoryDataLoading /> :
                    failed ? <Reload onClick={doSetCategoryData} /> :
                        allCategoryData
                }
            </Box>
            <Arrow direction={1} />
        </StylCategoryData>
    );
}

export default CategoryData;