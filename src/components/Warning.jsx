import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/warning.css";
function Warning() {
	return (
		<div className="warning-container">
			<div className="warning-modal">
				<p>Please Select the Category</p>
				<Link to="/home">
					<button className="btn-modal">Ok</button>
				</Link>
			</div>
		</div>
	);
}

export { Warning };
