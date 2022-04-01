import React from "react";
import NotFound from "../assets/page_not_found.png";
function PageNotFound() {
	return (
		<div className="flex items-center justify-center">
			<img className="w-80p min-h-65" src={NotFound} alt="not-found" />
		</div>
	);
}

export { PageNotFound };
