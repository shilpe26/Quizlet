import React from "react";
import { useCategory } from "../../context/category-context";
import "./result.css";
function Result() {
	const { getCategory } = useCategory();

	return (
		<div className="result-score text text-lg">
			Your Final Score is
			<span className="score-text-span font-extrabold p-4">
				{getCategory.showScore}
			</span>
			out of 50‼️
		</div>
	);
}

export { Result };
