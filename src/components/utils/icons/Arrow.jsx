import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

/**
 * @param {SvgIconProps & {direction: 'right' | 'left' | 'up' | 'down'}} props 
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
                        direction === 'up' ?
                            "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" :
                            direction === 'down' ?
                                "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" :
                                "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"

                }
            />
        </SvgIcon>
    );
}

export default ArrowIcon;