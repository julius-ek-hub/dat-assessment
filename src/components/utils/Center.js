import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const centerStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const Center = styled(Box)(() => centerStyle);

export default Center;
