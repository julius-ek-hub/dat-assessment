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
