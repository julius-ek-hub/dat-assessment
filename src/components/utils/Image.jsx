import { useLayoutEffect, useState } from "react";

import Box, { BoxProps } from "@mui/material/Box";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";
import IconButton from '@mui/material/IconButton';

import Center from './Center';
import ReloadIcon from './icons/Reload';

import useFetch from "../../hooks/useFetch";
import useExtra from "../../hooks/useExtra";

/**
 * Loads image with loading indicator and reload possibility
 * @param {BoxProps & {loadingProps: SkeletonProps} & {src: String, alt: String}} props 
 */

function Image(props) {

    const [fetching, setFetching] = useState(false);
    const [blobURL, setBlobURL] = useState(null);
    const [failed, setFailed] = useState(false);
    const { get } = useFetch('', true);
    const { fakeImageLoading } = useExtra();

    const { src, alt, loadingProps = {}, ...rest } = props;

    const fetchBlob = async () => {
        try {
            setFetching(true);
            const data = await get(src);
            const blob = await data.blob();
            setBlobURL((window.URL || window.webkitURL).createObjectURL(blob));
            setFailed(false);
        } catch (e) {
            setFailed(true);
        }
        finally {
            setFetching(false);
        }
    }

    useLayoutEffect(() => { fetchBlob() }, []);

    return (
        <>
            {(fetching || fakeImageLoading) ?
                <Skeleton {...loadingProps} />
                : failed ? (
                    <Center {...loadingProps}
                        bgcolor="divider"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        flexDirection="column"
                        overflow="hidden"
                        borderRadius={loadingProps?.variant === 'circular' ? '50%' : 0}>
                        {alt || 'Picture'}
                        <IconButton
                            title="Reload image"
                            onClick={fetchBlob}>
                            <ReloadIcon />
                        </IconButton>
                    </Center>
                ) : (
                    <Box
                        component="img"
                        src={blobURL}
                        alt={alt || 'Picture'}
                        {...rest}
                    />)}
        </>
    );
}

export default Image;