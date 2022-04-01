import React from "react";
import "./home.css";
import category from "../../db/category";
function Home() {
	return (
		<div>
			<h1 className="heading mb-20 text">
				<span className="text-lg border-6">Categories</span>
			</h1>
			<section className="cards_for-book cards_for-wish p-8 flex flex-wrap justify-around gapr">
				{category.map((item) => (
					<div className="center3 min-h-65" key={item._id}>
						<div className="container2">
							<div className="img_container2">
								<img className="img2" src={item.categoryImage} alt="category" />
								<div className="card">
									<h2 className="head2-2">{item.categoryName}</h2>
									<h3 className="head3-2 text-md">{item.description}</h3>
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export { Home };
