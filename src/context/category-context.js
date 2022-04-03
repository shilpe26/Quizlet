import { createContext, useContext, useState } from "react";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
	const [getCategory, setGetCategory] = useState(null);

	return (
		<CategoryContext.Provider value={{ getCategory, setGetCategory }}>
			{children}
		</CategoryContext.Provider>
	);
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };