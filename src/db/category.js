import { v4 as uuid } from "uuid";

export const category = [
	{
		_id: uuid(),
		categoryName: "DBMS",
		categoryImage: "https://i.postimg.cc/SX8pVKyR/DBMS.png",
		description: "🔹Test your knowledge for Database Management System.",
		categoryValue: "dbms",
	},
	{
		_id: uuid(),
		categoryName: "DSA",
		categoryImage: "https://i.postimg.cc/4YjgzcRj/DSA.jpg",
		description: "🔹Test your knowledge for Data Structure and Algorithm.",
		categoryValue: "dsa",
	},
	{
		_id: uuid(),
		categoryName: "JAVA",
		categoryImage: "https://i.postimg.cc/ppGxL7GW/java.png",
		description: "🔹Test your knowledge for JAVA Programming Language.",
		categoryValue: "java",
	},
	{
		_id: uuid(),
		categoryName: "OOPS",
		categoryImage: "https://i.postimg.cc/FYYvdZ8j/oops.jpg",
		description:
			"🔹Test your knowledge for Object-Oriented Programming System.",
		categoryValue: "oops",
	},
];
export default category;
