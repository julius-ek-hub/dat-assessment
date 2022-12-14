import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

import { centerStyle } from "../../utils/Center";

export const StyldHeader = styled(Box)(() => ({
	minHeight: "100vh",
}));

export const StyledAddressCard = styled(Paper)(() => ({
	...centerStyle,
	height: "200px",
	borderRadius: "20px",
	flexDirection: "column",
	gap: "5px",
	padding: "20px",
	img: {
		width: "50px",
	},
}));

export default StyldHeader;
