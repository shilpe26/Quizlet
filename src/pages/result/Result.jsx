import React from "react";
import { useCategory } from "../../context/category-context";
import "./result.css";
function Result() {
	const { getCategory, setGetCategory } = useCategory();

	return (
		<div className="text text-lg">
			Your Final Score is{" "}
			<span className="score-text-span font-extrabold">
				{getCategory.showScore}
			</span>{" "}
			out of 50‼️
		</div>
	);
}

export { Result };
