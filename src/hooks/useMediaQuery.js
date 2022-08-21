import useMuiMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

function useMediaQuery() {
	const theme = useTheme();

	const useSize = (key) => useMuiMediaQuery(theme.breakpoints.up(key));

	return {
		xsm: useSize("xs"),
		sm: useSize("sm"),
		md: useSize("md"),
		lg: useSize("lg"),
		xlg: useSize("xlg"),
	};
}

export default useMediaQuery;
