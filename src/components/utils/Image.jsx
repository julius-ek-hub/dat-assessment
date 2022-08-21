import { useLayoutEffect, useState } from "react";

import Box, { BoxProps } from "@mui/material/Box";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";

import useFetch from "../../hooks/useFetch";
import useExtra from "../../hooks/useExtra";

/**
 * Loads image with loading indicator
 * @param {BoxProps & {loadingProps: SkeletonProps} & {src: String, alt: String}} props 
 */

function Image(props) {

    const [fetching, setFetching] = useState(false);
    const [blobURL, setBlobURL] = useState(null);
    const { get } = useFetch('', true);
    const { fakeImageLoading } = useExtra();

    const { src, alt, loadingProps = {}, ...rest } = props;

    const fetchBlob = async () => {
        try {
            setFetching(true);
            const data = await get(src);
            const blob = await data.blob();
            setBlobURL((window.URL || window.webkitURL).createObjectURL(blob));
        } catch (e) {
            console.log(e)
        }
        finally {
            setFetching(false);
        }
    }

    useLayoutEffect(() => { fetchBlob() }, []);

    return (
        <>
            {(fetching || fakeImageLoading) ? <Skeleton {...loadingProps} /> : <Box
                component="img"
                src={blobURL}
                alt={alt || 'Picture'}
                {...rest}
            />}
        </>
    );
}

export default Image;