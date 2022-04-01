import { v4 as uuid } from "uuid";

export const questions = [
  {
    _id: uuid(),
    title: "DBMS",
    categoryValue: "dbms",
    score: 0,
    quiz:[
      {
      question: "What is the full form of DBMS?",
      options: [
        { answer: "Data of Binary Management System", isCorrect:false, isClick:false},
        {answer: "Database Management System",isCorrect:true, isClick:false},
        {answer: "Database Management Service",isCorrect:false, isClick:false},
        {answer: "Data Backup Management System",isCorrect:false, isClick:false},
      ],
    },
    {
      question: "What is a database?",
      options: [
        { answer: "DBMS is a collection of queries", isCorrect:false, isClick:false},
        {answer: "DBMS is a high-level language",isCorrect:false, isClick:false},
        {answer: "DBMS is a programming language",isCorrect:false, isClick:false},
        {answer: "DBMS stores, modifies and retrieves data",isCorrect:true, isClick:false},
      ],
    },
    {
      
      question: "Who created the first DBMS?",
      options: [
        { answer: "Edgar Frank Codd", isCorrect:false, isClick:false},
        {answer: "Charles Bachman",isCorrect:true, isClick:false},
        {answer: "Sharon B. Codd",isCorrect:false, isClick:false},
        {answer: "Charles Bachman",isCorrect:false, isClick:false},
      ],
    },
    {
      
      question: "Which of the following is not a type of database?",
      options: [
        { answer: "Hierarchical", isCorrect:false, isClick:false},
        {answer: "Network",isCorrect:false, isClick:false},
        {answer: "Distributed",isCorrect:true, isClick:false},
        {answer: "Distributed",isCorrect:false, isClick:false},
      ],
    },
    {
      
      question: "Which type of data can be stored in the database?",
      options: [
        { answer: "Image oriented data", isCorrect:false, isClick:false},
        {answer: "Text, files containing data",isCorrect:false, isClick:false},
        {answer: "Data in the form of audio or video",isCorrect:false, isClick:false},
        {answer: "All of the above",isCorrect:true, isClick:false},
      ],
    },
  ],
},
  
//   Question data set of DSA
  {
    _id: uuid(),
    title: "DSA",
    categoryValue: "dsa",
    score: 0,
    quiz:[
      {
      question: "The data structure required for Breadth First Traversal on a graph is?",
      options: [
        { answer: "Stack", isCorrect:false, isClick:false},
        {answer: "Array",isCorrect:false, isClick:false},
        {answer: "Queue",isCorrect:true, isClick:false},
        {answer: "Tree",isCorrect:false, isClick:false},
      ],
    },
    {
        question: "A queue follows __________",
        options: [
          { answer: "FIFO (First In First Out) principle", isCorrect:true, isClick:false},
          {answer: "LIFO (Last In First Out) principle",isCorrect:false, isClick:false},
          {answer: "Ordered array",isCorrect:false, isClick:false},
          {answer: "Linear tree",isCorrect:false, isClick:false},
        ],
      },
      {
          question: "A queue follows __________",
          options: [
            { answer: "FIFO (First In First Out) principle", isCorrect:true, isClick:false},
            {answer: "LIFO (Last In First Out) principle",isCorrect:false, isClick:false},
            {answer: "Ordered array",isCorrect:false, isClick:false},
            {answer: "Linear tree",isCorrect:false, isClick:false},
          ],
        },
        {
          question: "Circular Queue is also known as ________",
          options: [
            { answer: "Ring Buffer", isCorrect:true, isClick:false},
            {answer: "Square Buffer",isCorrect:false, isClick:false},
            {answer: "Rectangle Buffer",isCorrect:false, isClick:false},
            {answer: "Curve Buffer",isCorrect:false, isClick:false},
          ],
        },
        {
          question: "Queues serve major role in ______________",
          options: [
            { answer: "Simulation of recursion", isCorrect:false, isClick:false},
            {answer: "Simulation of arbitrary linked list",isCorrect:false, isClick:false},
            {answer: "Simulation of limited resource allocation",isCorrect:true, isClick:false},
            {answer: "Simulation of heap sort",isCorrect:false, isClick:false},
          ],
        },
        {
          question: "Which of the following is not the type of queue?",
          options: [
            { answer: "Ordinary queue", isCorrect:false, isClick:false},
            {answer: "Single ended queue",isCorrect:true, isClick:false},
            {answer: "Circular queue",isCorrect:false, isClick:false},
            {answer: "Priority queue",isCorrect:false, isClick:false},
          ],
        },
      ],
    }
//   Question data set of JAVA
// {
//     _id: uuid(),
//     title: "JAVA",
//     question: "Who invented Java Programming?",
//     optionA: "Guido van Rossum",
//     optionB: "James Gosling",
//     optionC: "Dennis Ritchie",
//     optionD:  "Bjarne Stroustrup",
//     answer: "James Gosling",
//     categoryName: "JAVA",
//   },{
//     _id: uuid(),
//     title: "JAVA",
//     question: "Which statement is true about Java?",
//     optionA: "Java is a sequence-dependent programming language",
//     optionB: " Java is a code dependent programming language",
//     optionC: "Java is a platform-dependent programming language",
//     optionD:  "Java is a platform-independent programming language",
//     answer: "Java is a platform-independent programming language",
//     categoryName: "JAVA",
//   },{
//     _id: uuid(),
//     title: "JAVA",
//     question: "Which component is used to compile, debug and execute the java programs?",
//     optionA: "JRE",
//     optionB: "JIT",
//     optionC: "JDK",
//     optionD: "JVM",
//     answer: "JDK",
//     categoryName: "JAVA",
//   },{
//     _id: uuid(),
//     title: "JAVA",
//     question: "Which one of the following is not a Java feature?",
//     optionA: "Object-oriented",
//     optionB: "Use of pointers",
//     optionC: "Portable",
//     optionD:  "Dynamic and Extensible",
//     answer: "Use of pointers",
//     categoryName: "JAVA",
//   },{
//     _id: uuid(),
//     title: "JAVA",
//     question: "Which of these cannot be used for a variable name in Java?",
//     optionA: "identifier & keyword",
//     optionB: "identifier",
//     optionC: "keyword",
//     optionD:  "none of the mentioned",
//     answer: "keyword",
//     categoryName: "JAVA",
//   },
// //   Question data set of OOPS
// {
//     _id: uuid(),
//     title: "OOPS",
//     question: "Who invented OOP?",
//     optionA: "Andrea Ferro",
//     optionB: "Adele Goldberg",
//     optionC: "Alan Kay",
//     optionD:  "Dennis Ritchie",
//     answer: "Alan Kay",
//     categoryName: "OOPS",
//   },{
//     _id: uuid(),
//     title: "OOPS",
//     question: "Which is not a feature of OOP in general definitions?",
//     optionA: "Efficient Code",
//     optionB: "Code reusability",
//     optionC: "Modularity",
//     optionD:  "Duplicate/Redundant data",
//     answer: "Duplicate/Redundant data",
//     categoryName: "OOPS",
//   },{
//     _id: uuid(),
//     title: "OOPS",
//     question: "When OOP concept did first came into picture?",
//     optionA: "1980’s",
//     optionB: "1995",
//     optionC: "1970’s",
//     optionD:  "1993",
//     answer: "1970’s",
//     categoryName: "OOPS",
//   },{
//     _id: uuid(),
//     title: "OOPS",
//     question: "Which feature of OOP indicates code reusability?",
//     optionA: "Abstraction",
//     optionB: "Polymorphism",
//     optionC: "Encapsulation",
//     optionD:  "Inheritance",
//     answer: "Inheritance",
//     categoryName: "OOPS",
//   },{
//     _id: uuid(),
//     title: "OOPS",
//     question: "Which among the following doesn’t come under OOP concept?",
//     optionA: "Data hiding",
//     optionB: "Message passing",
//     optionC: "Platform independent",
//     optionD:  "Data binding",
//     answer: "Platform independent",
//     categoryName: "OOPS",
//   },
]