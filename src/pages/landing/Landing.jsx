import React from "react";
import LandingImage from "../../assets/quiz-choose.png";
import { Link } from "react-router-dom";
import "./landing.css";
function Landing() {
	return (
		<div>
			<div className="container-quiz mx-16">
				<div>
					<div className="content-quiz">
						<h2 className="text-lg">Quiz for Computer Science</h2>

						<p className="para-quiz text-xmd">
							Test your knowledge about subjects like DBMS, DSA, JAVA, OOPS and
							more using QuizLet.
						</p>
					</div>
					<div className="btn-quiz mt-32">
						<Link to="/instruction">
							<button
								type="button"
								className="btn btn-primary border-12 p-4 w-64"
							>
								Get Started
							</button>
						</Link>
					</div>
				</div>

				<div className="image-quiz">
					<img src={LandingImage} alt="landing-page" className="bottom-12" />
				</div>
			</div>
		</div>
	);
}

export { Landing };
