import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyldNavBar = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	zIndex: 2,
	"img.logo": {
		height: "40px",
	},
	ul: {
		listStyleType: "none",
		display: "flex",
		gap: "50px",
	},
}));

export default StyldNavBar;
