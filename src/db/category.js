import { v4 as uuid } from "uuid";

export const category = [
	{
		_id: uuid(),
		categoryName: "DBMS",
		categoryImage: "https://i.postimg.cc/SX8pVKyR/DBMS.png",
		description:
			"A database management system (or DBMS) is essentially nothing more than a computerized data-keeping system.",
		categoryValue: "DBMS",
	},
	{
		_id: uuid(),
		categoryName: "DSA",
		categoryImage: "https://i.postimg.cc/4YjgzcRj/DSA.jpg",
		description:
			"A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem.",
		categoryValue: "DSA",
	},
	{
		_id: uuid(),
		categoryName: "JAVA",
		categoryImage: "https://i.postimg.cc/ppGxL7GW/java.png",
		description:
			"Java is an object-oriented programming language that produces software for multiple platforms.",
		categoryValue: "JAVA",
	},
	{
		_id: uuid(),
		categoryName: "OOPS",
		categoryImage: "https://i.postimg.cc/FYYvdZ8j/oops.jpg",
		description:
			"Object-Oriented Programming System (OOPs) is a programming concept that works on the principles of abstraction, encapsulation, inheritance, and polymorphism.",
		categoryValue: "OOPS",
	},
];
export default category;