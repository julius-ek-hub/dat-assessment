import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';

import ReloadIcon from "../utils/icons/Reload";

import useExtra from "../../hooks/useExtra";

function ImageLoadingSimulator() {
    const { fakeImageLoading, toggleFakeLoading } = useExtra();

    return (
        <IconButton
            title="If toggled on, will simulate an instance where images loaded using Utils/Image component are not ready yet by providing skeletons"
            disableRipple
            {...(fakeImageLoading && { sx: { bgcolor: 'primary.main' } })}
            onClick={toggleFakeLoading}
        >
            <Badge badgeContent="Extra" color="error">
                <ReloadIcon />
            </Badge>
        </IconButton>
    );
}

export default ImageLoadingSimulator;