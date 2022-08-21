import { createTheme } from "@mui/material/styles";

const theme = (mode = "dark") =>
	createTheme({
		palette: {
			mode,
			primary: {
				main: "#fdc913",
			},
			secondary: {
				main: mode === "dark" ? "#fdc913" : "#000",
			},
			error: {
				main: "#ce2829",
			},
			lightBg: {
				main: mode === "dark" ? "#000" : "#faf7f2",
			},
		},
		components: {
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
					sx: { textTransform: "none !important" },
				},
			},
			MuiSvgIcon: {
				defaultProps: {
					xmlns: "http://www.w3.org/2000/svg",
					width: "16",
					height: "16",
					fill: "currentColor",
					viewBox: "0 0 16 16",
				},
			},
		},
	});

export default theme;
