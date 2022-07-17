import React from "react";
import { Link } from "react-router-dom";
import { VscActivateBreakpoints } from "react-icons/vsc";
import "./instruction.css";
function Instruction() {
	return (
		<div className="instrusctions-sets">
			<h1 className="intruction-head text-lg text">
				<u>Quiz Instructions</u>
			</h1>
			<div className="quiz-rules border-12 p-4 text-md w-43p m-auto">
				<h3 className="font-medium">
					<VscActivateBreakpoints className="mr-4" />
					Choose category of your interest
				</h3>

				<h3 className="font-medium">
					<VscActivateBreakpoints className="mr-4" />
					Play the quiz
				</h3>
				<h3 className="font-medium">
					<VscActivateBreakpoints className="mr-4" />
					Each quiz consist of 5 questions
				</h3>
				<h3 className="font-medium">
					<VscActivateBreakpoints className="mr-4" />
					For each Correct answer you will get{" "}
					<span className="correct-marks">10</span> marks
				</h3>
				<h3 className="font-medium">
					<VscActivateBreakpoints className="mr-4" />
					For wrong answer <span className="wrong-marks">-5</span> marks will be
					deducted
				</h3>
				<h3 className="font-medium">
					<VscActivateBreakpoints className="mr-4" />
					After quiz your score will be shown
				</h3>
			</div>
			<div className="btn-quiz flex justify-end items-end mr-16 mt-5">
				<Link to="/home">
					<button
						type="button"
						className="btn btn-primary border-12 p-4 w-64  m-auto"
					>
						Play
					</button>
				</Link>
			</div>
		</div>
	);
}

export { Instruction };
