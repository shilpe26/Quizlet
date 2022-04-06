import React from "react";
import { useCategory } from "../../context/category-context";
import "./result.css";
import { Link } from "react-router-dom";

function Result() {
	const { getCategory } = useCategory();
	const { quiz } = getCategory;
	const scoreData = {
		50: "5",
		35: "4",
		20: "3",
		5: "2",
		"-10": "1",
	};
	const correctCount = scoreData[getCategory.showScore.toString()];
	return (
		<div className="result-score text text-lg">
			<div className="final-score text p-8 w-50p m-auto">
				Score:
				<span className="score-text-span font-extrabold pl-4">
					{getCategory.showScore}
				</span>
				/50
			</div>
			<div className="correct-text mt-4 pr-16">
				Correct:{" "}
				<span className="score-text-span font-extrabold pl-4">
					{correctCount}
				</span>
				/5
			</div>
			{quiz.map((item) => (
				<div key={item.question} className="correct-ques-listing text p-4">
					<h4 className="mb-4">{item.question}</h4>
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
