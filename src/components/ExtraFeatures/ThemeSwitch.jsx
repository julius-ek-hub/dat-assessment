import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';

import LightBulbIcon from "../utils/icons/LightBulb";

import useExtra from "../../hooks/useExtra";

function ThemeSwitch() {
    const { theme, toggleThemeMode } = useExtra();

    return (
        <IconButton
            title="If toggled on, will set the page to dark mode"
            onClick={toggleThemeMode}>
            <Badge badgeContent="Extra" color="error">
                <LightBulbIcon state={theme === 'light' ? 'on' : 'off'} />
            </Badge>
        </IconButton>
    );
}

export default ThemeSwitch;