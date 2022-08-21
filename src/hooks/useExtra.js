import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../features/extraSlice";

import useLocalStorage from "./useLocalStorage";

function useExtra() {
	const dispatch = useDispatch();
	const { theme, fakeImageLoading } = useSelector(({ extra }) => extra);
	const { saveItemToLocalStorage } = useLocalStorage();

	const toggleFakeLoading = () =>
		dispatch(setValue({ key: "fakeImageLoading", value: !fakeImageLoading }));

	const toggleThemeMode = () => {
		const value = theme === "light" ? "dark" : "light";
		dispatch(setValue({ key: "theme", value }));
		saveItemToLocalStorage("themeMode", value);
	};

	const setThemeMode = (value) => {
		value = ["light", "dark"].includes(value) ? value : "light";
		dispatch(setValue({ key: "theme", value }));
		saveItemToLocalStorage("themeMode", value);
	};

	return {
		theme,
		fakeImageLoading,
		toggleFakeLoading,
		toggleThemeMode,
		setThemeMode,
	};
}

export default useExtra;
