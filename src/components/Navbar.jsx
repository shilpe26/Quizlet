import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";

function Navbar() {
	return (
		<div>
			<nav className="container-quiz px-16">
				<h1 className="heading-quiz text-xlg">
					<Link to="/">
						<span className="span-quiz">QUIZ</span>LET⁉️🤔
					</Link>
				</h1>
			</nav>
		</div>
	);
}

export { Navbar };
