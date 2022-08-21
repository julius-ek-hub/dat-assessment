import usMuiMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

function useMediaQuery() {
	const theme = useTheme();

	const useSize = (key) => usMuiMediaQuery(theme.breakpoints.up(key));

	const prefersDarkMode = usMuiMediaQuery("(prefers-color-scheme: dark)");

	return {
		xsm: useSize("xs"),
		sm: useSize("sm"),
		md: useSize("md"),
		lg: useSize("lg"),
		xlg: useSize("xlg"),
		prefersDarkMode,
	};
}

export default useMediaQuery;
