import { useLayoutEffect } from "react";

import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';

import LightBulbIcon from "../utils/icons/LightBulb";

import useExtra from "../../hooks/useExtra";
import useLocalStorage from '../../hooks/useLocalStorage';

function ThemeSwitch() {
    const { theme, toggleThemeMode, setThemeMode } = useExtra();
    const { getItemFromLocalStorage } = useLocalStorage();

    useLayoutEffect(() => { setThemeMode(getItemFromLocalStorage('themeMode')); }, [])

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