import { v4 as uuid } from "uuid";

export const questions = [
	{
		_id: uuid(),
		title: "DBMS",
		categoryValue: "dbms",
		quiz: [
			{
				question: "What is the full form of DBMS?",
				options: [
					{
						answer: "Data of Binary Management System",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Database Management System",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Database Management Service",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Data Backup Management System",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "What is a database?",
				options: [
					{
						answer: "DBMS is a collection of queries",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "DBMS is a high-level language",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "DBMS is a programming language",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "DBMS stores, modifies and retrieves data",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Who created the first DBMS?",
				options: [
					{
						answer: "Edgar Frank Codd",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Charles Bachman",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Sharon B. Codd",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Charles Babage",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Which of the following is not a type of database?",
				options: [
					{
						answer: "Hierarchical",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Network",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Distributed",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Decentralised",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Which type of data can be stored in the database?",
				options: [
					{
						answer: "Image oriented data",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Text, files containing data",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Data in the form of audio or video",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "All of the above",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
				],
			},
		],
	},

	//   Question data set of DSA
	{
		_id: uuid(),
		title: "DSA",
		categoryValue: "dsa",
		quiz: [
			{
				question:
					"The data structure required for Breadth First Traversal on a graph is?",
				options: [
					{
						answer: "Stack",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Array",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Queue",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Tree",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},

			{
				question: "A queue follows __________",
				options: [
					{
						answer: "FIFO (First In First Out) principle",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "LIFO (Last In First Out) principle",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Ordered array",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Linear tree",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Circular Queue is also known as ________",
				options: [
					{
						answer: "Ring Buffer",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Square Buffer",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Rectangle Buffer",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Curve Buffer",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Queues serve major role in ______________",
				options: [
					{
						answer: "Simulation of recursion",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Simulation of arbitrary linked list",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Simulation of limited resource allocation",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Simulation of heap sort",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Which of the following is not the type of queue?",
				options: [
					{
						answer: "Ordinary queue",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Single ended queue",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Circular queue",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Priority queue",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
		],
	},
	//   Question data set of JAVA
	{
		_id: uuid(),
		title: "JAVA",
		categoryValue: "java",
		quiz: [
			{
				question: "Who invented Java Programming?",
				options: [
					{
						answer: "Guido van Rossum",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "James Gosling",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Dennis Ritchie",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Bjarne Stroustrup",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},

			{
				question: "Which statement is true about Java?",
				options: [
					{
						answer: "Java is a sequence-dependent programming language",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Java is a code dependent programming language",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Java is a platform-dependent programming language",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Java is a platform-independent programming language",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question:
					"Which component is used to compile, debug and execute the java programs?",
				options: [
					{
						answer: "JRE",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "JIT",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "JDK",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "JVM",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Which one of the following is not a Java feature?",
				options: [
					{
						answer: "Object-oriented",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Use of pointers",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Portable",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Dynamic and Extensible",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Which of these cannot be used for a variable name in Java?",
				options: [
					{
						answer: "identifier & keyword",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "identifier",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "keyword",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "none of the mentioned",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
		],
	},
	//   Question data set of OOPS
	{
		_id: uuid(),
		title: "OOPS",
		categoryValue: "oops",
		quiz: [
			{
				question: "Who invented OOP?",
				options: [
					{
						answer: "Andrea Ferro",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Adele Goldberg",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Alan Kay",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Dennis Ritchie",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Which among the following doesn’t come under OOP concept?",
				options: [
					{
						answer: "Data hiding",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Message passing",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Platform independent",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Data binding",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Which is not a feature of OOP in general definitions?",
				options: [
					{
						answer: "Efficient Code",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Modularity",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Code reusability",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Duplicate/Redundant data",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "When OOP concept did first came into picture?",
				options: [
					{
						answer: "1980’s",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "1995",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "1970’s",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "1993",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
				],
			},
			{
				question: "Which feature of OOP indicates code reusability?",
				options: [
					{
						answer: "Abstraction",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Polymorphism",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Encapsulation",
						isCorrect: false,
						isClick: false,
						id: uuid(),
					},
					{
						answer: "Inheritance",
						isCorrect: true,
						isClick: false,
						id: uuid(),
					},
				],
			},
		],
	},
];
