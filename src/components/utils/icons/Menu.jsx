import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

/**
 * @param {SvgIconProps} props 
 */

function MenuIcon(props) {
    return (
        <SvgIcon
            {...props}>
            <SvgIcon
                component="path"
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </SvgIcon>
    );
}

export default MenuIcon;