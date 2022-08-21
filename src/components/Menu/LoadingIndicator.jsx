import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function LoadingIndicator() {
    return [...new Array(10)].map((i, j) => (
        <Box width={200} height={300} display="flex" flexDirection="column" key={j}>
            <Skeleton height={200} sx={{ transform: 'none' }} />
            <Box display="flex" justifyContent="space-between" mt={2}><Skeleton width="60%" /> <Skeleton width="30%" /></Box>
            <Skeleton />
            <Skeleton />
        </Box>
    ))
}

export default LoadingIndicator;