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
					},
					{
						answer: "Database Management System",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "Database Management Service",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Data Backup Management System",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "DBMS is a high-level language",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "DBMS is a programming language",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "DBMS stores, modifies and retrieves data",
						isCorrect: true,
						isClick: false,
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
					},
					{
						answer: "Charles Bachman",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "Sharon B. Codd",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Charles Babage",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Network",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Distributed",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Decentralised",
						isCorrect: true,
						isClick: false,
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
					},
					{
						answer: "Text, files containing data",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Data in the form of audio or video",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "All of the above",
						isCorrect: true,
						isClick: false,
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
					},
					{
						answer: "Array",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Queue",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "Tree",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "LIFO (Last In First Out) principle",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Ordered array",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Linear tree",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Square Buffer",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Rectangle Buffer",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Curve Buffer",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Simulation of arbitrary linked list",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Simulation of limited resource allocation",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "Simulation of heap sort",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Single ended queue",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "Circular queue",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Priority queue",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "James Gosling",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "Dennis Ritchie",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Bjarne Stroustrup",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Java is a code dependent programming language",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Java is a platform-dependent programming language",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Java is a platform-independent programming language",
						isCorrect: true,
						isClick: false,
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
					},
					{
						answer: "JIT",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "JDK",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "JVM",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Use of pointers",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "Portable",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Dynamic and Extensible",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "identifier",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "keyword",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "none of the mentioned",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Adele Goldberg",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Alan Kay",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "Dennis Ritchie",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Message passing",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Platform independent",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "Data binding",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Modularity",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Code reusability",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Duplicate/Redundant data",
						isCorrect: true,
						isClick: false,
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
					},
					{
						answer: "1995",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "1970’s",
						isCorrect: true,
						isClick: false,
					},
					{
						answer: "1993",
						isCorrect: false,
						isClick: false,
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
					},
					{
						answer: "Polymorphism",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Encapsulation",
						isCorrect: false,
						isClick: false,
					},
					{
						answer: "Inheritance",
						isCorrect: true,
						isClick: false,
					},
				],
			},
		],
	},
];
