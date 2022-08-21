import { useLayoutEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./components/HomePage";

import theme from "./theme";

import useExtra from "./hooks/useExtra";

function App() {
	const { theme: mode, initializeTheme } = useExtra();

	useLayoutEffect(() => {
		initializeTheme();

		//  You can remove the code below in your local environment
		//  ---------------------------------------------
		//  Since the api endpoints are not secured, the live preview
		//  on heroku must be forced over http
		//  to be able to talk to the the api

		const location = window.location;
		if (location.protocol !== "http:")
			location.href = "http://" + location.host;
	}, []);

	return (
		<ThemeProvider theme={theme(mode)}>
			<ErrorBoundary>
				<HomePage />
			</ErrorBoundary>
			<CssBaseline enableColorScheme />
		</ThemeProvider>
	);
}

export default App;
