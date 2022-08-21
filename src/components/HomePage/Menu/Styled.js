import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

import Center, { style } from "../../utils/Center";

export const StylCategoryData = styled(Box)(() => ({
	display: "flex",
	position: "relative",
	"&>*": {
		...style,
		width: "20px",
		padding: "0 30px",
		"&:is(:nth-of-type(2))": {
			flexGrow: 1,
			overflow: "auto",
			gap: "20px",
			justifyContent: "flex-start",
			padding: "10px",
			"&>*": {
				flexShrink: 0,
			},
			"&::-webkit-scrollbar": {
				display: "none",
			},
		},
		"& .MuiIconButton": {
			padding: "30px !important",
		},
	},
}));

export const StyledContents = styled(Center)(() => ({
	"& >:firstchild": {
		display: "flex",
		flexdirection: "column",
		justifycontent: "flex-start",
	},
}));

export const StyledAddress = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
}));

export const StyledAddressCard = styled(Paper)(({ active, theme }) => ({
	...style,
	height: "200px",
	width: "32%",
	borderRadius: "20px",
	flexDirection: "column",
	gap: "5px",
	padding: "20px",
	img: {
		width: "50px",
	},
	...(active && { backgroundColor: theme.palette.primary.main }),
}));
