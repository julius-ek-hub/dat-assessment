import { useEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import StickyNav from "./components/StickyNav";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Register from "./components/Register";
import Footer from "./components/Footer";

import theme from "./theme";
import useExtra from "./hooks/useExtra";

function App() {
	const { theme: mode } = useExtra();

	//  You can remove this hook in your local environment
	//  ---------------------------------------------
	//  Since the api endpoints are not secured, the live preview on heroku must be forced over http
	//  to be able to talk to the the api

	useEffect(() => {
		const location = window.location;
		if (location.protocol !== "http:")
			location.href = "http://" + location.host;
	}, []);

	return (
		<ThemeProvider theme={theme(mode)}>
			<StickyNav />
			<Header />
			<Register />
			<Menu />
			<Footer />
			<CssBaseline enableColorScheme />
		</ThemeProvider>
	);
}

export default App;
