import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export const CategoriesLoading = () => [...new Array(6)].map((i, j) => (
    <Skeleton
        width={100}
        height={40}
        key={j}
        sx={{ transform: 'none', mt: 1, ml: 1 }} />
));

function CategoryDataLoading() {
    return [...new Array(10)].map((i, j) => (
        <Box width={200} height={300} display="flex" flexDirection="column" key={j}>
            <Skeleton height={200} sx={{ transform: 'none' }} />
            <Box display="flex" justifyContent="space-between" mt={2}><Skeleton width="60%" /> <Skeleton width="30%" /></Box>
            <Skeleton />
            <Skeleton />
        </Box>
    ))
}

export default CategoryDataLoading;