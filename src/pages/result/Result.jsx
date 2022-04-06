import React from "react";
import { useCategory } from "../../context/category-context";
import "./result.css";
import { Link } from "react-router-dom";

function Result() {
	const { getCategory } = useCategory();
	const { quiz } = getCategory;
	return (
		<div className="result-score text text-lg">
			<div className="final-score text p-8 w-50p m-auto">
				Your Final Score is
				<span className="score-text-span font-extrabold p-4">
					{getCategory.showScore}
				</span>
				out of 50‼️
			</div>
			{quiz.map((item) => (
				<div key={item.question} className="correct-ques-listing text mt-24">
					{item.question}
					{item.options.map((option) => (
						<div className="">
							<p
								key={option.answer}
								className={`inline-block m-auto p-4 w-40p border-12 text-md ${
									option.isCorrect ? "answer-green" : ""
								}`}
							>
								{option.answer}
							</p>
						</div>
					))}
				</div>
			))}
			<div className="play-again-container flex items-center justify-center mt-32">
				<Link to="/home">
					<button type="button" className="btn btn-primary border-12 p-4 w-64">
						Play Again
					</button>
				</Link>
			</div>
		</div>
	);
}

export { Result };
