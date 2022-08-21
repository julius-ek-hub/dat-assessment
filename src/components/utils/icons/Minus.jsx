import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

/**
 * @param {SvgIconProps} props 
 */

function MinusIcon(props) {
    return (
        <SvgIcon
            {...props}>
            <SvgIcon
                component="path"
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
            />
        </SvgIcon>
    );
}

export default MinusIcon;