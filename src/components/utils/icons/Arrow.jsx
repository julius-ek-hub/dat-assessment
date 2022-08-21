import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

/**
 * @param {SvgIconProps & {direction: 'right' | 'left'}} props 
 */

function ArrowIcon(props) {
    const { direction = "right" } = props;
    return (
        <SvgIcon
            {...props}>
            <SvgIcon
                component="path"
                fillRule="evenodd"
                d={
                    direction === 'right' ?
                        "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" :
                        "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"

                }
            />
        </SvgIcon>
    );
}

export default ArrowIcon;