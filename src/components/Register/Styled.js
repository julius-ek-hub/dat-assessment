import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyldRegisterSection = styled(Box)((props) => ({
	display: "flex",
	gap: "4rem",
	borderRadius: "20px",
	"&>*": {
		width: props["children-width"],
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start !important",
		gap: "2rem",
	},
}));

export default StyldRegisterSection;
