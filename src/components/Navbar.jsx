import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";

function Navbar() {
	return (
		<div>
			<nav className="container-quiz px-16">
				<Link to="/">
					<h1 className="heading-quiz text-xlg">
						<span className="span-quiz">QUIZ</span>LET⁉️
					</h1>
				</Link>
			</nav>
		</div>
	);
}

export { Navbar };
