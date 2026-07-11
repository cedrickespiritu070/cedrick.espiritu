# H2 Software Fullstack Developer Interview Prep

Interview date: July 7, 2026
Role: Fullstack Developer - React Native or React JS
Company: H2 Software Consulting Services Inc.

## Company Notes

H2 Software is a Filipino IT company formed in 2011. They provide IT services and software solutions for Philippine businesses.

Their services include:

- Payroll Software as a Service
- IT service outsourcing
- IT staff augmentation
- Software development
- Software testing
- Service desk and technical support
- Robotic Process Automation

Simple line you can say:

> I read that H2 Software is a Filipino IT company that provides software development, payroll software, testing, support, and staff augmentation services. I like that the company works on real business systems used by Philippine companies.

## Short Self Introduction

Question: Tell me about yourself.

Answer:

> Hi, my name is Cedrick. I am a fullstack developer with experience in building web and mobile applications using JavaScript and TypeScript. I have worked with React, React Native, backend APIs, databases, and Git. I enjoy solving problems, building clean user interfaces, and connecting the frontend to reliable backend services. I am applying for this role because I want to grow as a fullstack developer and contribute to real business applications.

Shorter version:

> Hi, I am Cedrick. I am a fullstack developer focused on React, React Native, JavaScript, TypeScript, and backend API development. I like building useful applications and solving technical problems.

## Why H2 Software?

Question: Why do you want to work at H2 Software?

Answer:

> I want to work at H2 Software because the company builds software solutions for real business needs, like payroll systems, software development, testing, and IT services. I also like that it is a Filipino IT company, so I feel the work is close to local business problems. I believe I can learn more here and also contribute using my experience in frontend, backend, and mobile development.

## Why This Position?

Question: Why are you interested in this Fullstack Developer role?

Answer:

> I am interested in this role because it matches my skills in React, React Native, JavaScript or TypeScript, backend APIs, and databases. I like fullstack work because I can understand both the user interface and the backend logic. It helps me build complete features, not only one part of the application.

## React Native Questions

Question: What is React Native?

Answer:

> React Native is a framework for building mobile applications using JavaScript or TypeScript and React. It allows developers to build apps for Android and iOS using one codebase. It uses native components, so the app can feel closer to a real mobile app.

Question: What is the difference between React JS and React Native?

Answer:

> React JS is mainly for web applications that run in the browser. React Native is for mobile applications on Android and iOS. They both use components, props, state, and hooks, but React Native uses mobile components like View, Text, and TouchableOpacity instead of HTML elements like div and button.

Question: How do you handle API calls in React Native?

Answer:

> I usually create a service or API file where I put the API request functions. I use fetch or axios to call the backend. In the component, I call the function inside useEffect or after a user action. I also handle loading, success, and error states so the user knows what is happening.

Question: How do you improve React Native app performance?

Answer:

> I try to avoid unnecessary re-renders, use FlatList for long lists, memoize components when needed, optimize images, and avoid heavy logic inside the render part. I also check API calls and loading states because slow data can make the app feel slow.

Question: How do you store data locally in React Native?

Answer:

> For simple data, I can use AsyncStorage, like saving a token or user preference. For bigger local data, I can use SQLite or another local database depending on the app requirement.

## React JS Questions

Question: What is a component in React?

Answer:

> A component is a reusable part of the user interface. It can have its own logic, props, and state. For example, a Button, LoginForm, or UserCard can be a component.

Question: What are props?

Answer:

> Props are values passed from a parent component to a child component. They help make components reusable and dynamic.

Question: What is state?

Answer:

> State is data that belongs to a component and can change over time. When state changes, React updates the UI.

Question: What is useEffect?

Answer:

> useEffect is a React hook used for side effects. For example, I use it for API calls, subscriptions, or updating something after the component renders.

Question: How do you manage forms in React?

Answer:

> I usually use controlled components, where the input value is stored in state. I validate the fields before submitting. For bigger forms, I can use libraries like React Hook Form.

## JavaScript and TypeScript Questions

Question: What is the difference between JavaScript and TypeScript?

Answer:

> JavaScript runs directly in the browser or Node.js. TypeScript is like JavaScript with types. It helps catch errors early, makes the code easier to read, and gives better autocomplete when coding.

Question: What is async and await?

Answer:

> async and await are used to handle asynchronous code, like API requests. async makes a function return a promise, and await waits for the promise result before continuing.

Question: What is a promise?

Answer:

> A promise is an object that represents a future result. It can be pending, resolved, or rejected. It is commonly used for API calls.

Question: What is the difference between let, const, and var?

Answer:

> const is for values that should not be reassigned. let is for values that can change. var is older and has function scope, so I usually prefer let and const.

## Backend and API Questions

Question: What is a REST API?

Answer:

> A REST API is a way for frontend and backend systems to communicate using HTTP. It usually uses methods like GET, POST, PUT, PATCH, and DELETE.

Question: Explain GET, POST, PUT, PATCH, and DELETE.

Answer:

> GET is used to read data. POST is used to create data. PUT is used to replace or update a full record. PATCH is used to update part of a record. DELETE is used to remove data.

Question: How do you build a backend API using Node.js and Express?

Answer:

> I create an Express server, define routes, add controllers for the business logic, connect to a database, and return JSON responses. I also add middleware for validation, authentication, error handling, and security when needed.

Question: How do you handle backend errors?

Answer:

> I use try-catch for async functions and return proper status codes and messages. I also avoid exposing sensitive errors to the user. For debugging, I log the real error on the server.

Question: What HTTP status codes do you know?

Answer:

> 200 means success. 201 means created. 400 means bad request. 401 means unauthorized. 403 means forbidden. 404 means not found. 500 means server error.

Question: How do you secure an API?

Answer:

> I validate inputs, use authentication like JWT, protect private routes, hash passwords, avoid exposing sensitive data, and use HTTPS in production. I also check user permissions before allowing actions.

## Database Questions

Question: What database have you used?

Answer:

> I have experience working with databases for storing application data. I can work with SQL or NoSQL depending on the project. I understand tables or collections, relationships, queries, and basic data modeling.

Question: What is the difference between SQL and NoSQL?

Answer:

> SQL databases use tables and structured schemas. They are good for relational data. NoSQL databases are more flexible and often use documents or collections. They are useful when the data structure changes often.

Question: How do you design a simple user table?

Answer:

> A simple user table can have id, name, email, password_hash, role, created_at, and updated_at. I will not store the plain password. I will store only the hashed password.

## Git Questions

Question: How do you use Git in a team?

Answer:

> I create a branch for my task, commit small changes with clear messages, pull the latest changes, fix conflicts if needed, and create a pull request for review. I also try to keep my branch updated.

Question: What is a merge conflict?

Answer:

> A merge conflict happens when Git cannot automatically combine changes from different branches. I fix it by checking both versions, choosing the correct code, testing it, then committing the fix.

## Problem Solving and Debugging

Question: How do you debug a bug?

Answer:

> First, I try to reproduce the issue. Then I check the error message, logs, network request, and recent changes. I isolate the problem step by step. After fixing it, I test the same scenario again to make sure it works.

Question: What do you do if you do not know the answer?

Answer:

> I will be honest and say that I do not know yet, but I will explain how I will find the answer. I usually check documentation, debug the issue, ask the right questions, and test my solution.

Question: How do you handle pressure or deadlines?

Answer:

> I stay calm and break the task into smaller parts. I prioritize the most important parts first, communicate early if there is a blocker, and focus on delivering a working solution.

## Teamwork and Communication

Question: How do you collaborate with UI/UX designers?

Answer:

> I check the design carefully, ask questions if something is unclear, and make sure the implementation matches the design. If there is a technical limitation, I communicate it early and suggest another solution.

Question: How do you explain technical issues to non-technical people?

Answer:

> I explain it in simple words and focus on the impact. I avoid too much technical detail. I tell them what happened, what I am doing, and when they can expect the fix.

Question: Are you comfortable working with a team?

Answer:

> Yes. I am comfortable working with a team. I can communicate updates, ask questions when needed, and help teammates when I can. I also accept feedback because it helps improve the work.

## Possible Technical Exam Topics

Review these before the interview:

- React components, props, state, hooks
- useEffect and API calls
- Form validation
- React Native components: View, Text, FlatList, TouchableOpacity
- Navigation in mobile apps
- REST API methods and status codes
- Node.js and Express routes
- Authentication using JWT
- Database CRUD operations
- Git branch, commit, pull request, merge conflict
- Basic debugging using console logs, browser DevTools, and network tab

## Sample Coding Question Answers

Question: How would you create a login feature?

Answer:

> I will create a login form with email and password fields. I will validate the inputs first. Then I will call the login API using POST. If the login is successful, I will store the token securely and redirect the user to the main screen. If there is an error, I will show a clear error message.

Question: How would you fetch and display a list of users?

Answer:

> I will call the users API inside useEffect when the component loads. I will store the result in state. While loading, I will show a loading indicator. If there is an error, I will show an error message. If successful, I will display the users using map in React JS or FlatList in React Native.

Question: How would you update a record?

Answer:

> I will get the updated values from the form, validate them, and send a PUT or PATCH request to the backend. After success, I will update the UI or refetch the data to make sure the screen shows the latest value.

## Questions You Can Ask Them

Ask 2 or 3 questions only.

1. What kind of projects will I work on if I join this role?
2. Will the role focus more on React Native mobile apps or React JS web apps?
3. What backend technologies does the team usually use?
4. How does the team handle code review and testing?
5. What does success look like for this role in the first 3 months?

## Strong Closing Statement

Question: Do you have anything else to add?

Answer:

> Thank you for the opportunity. I am interested in this role because it matches my fullstack skills. I am willing to learn your process and technology stack, and I will do my best to contribute to the team and deliver good quality work.

## Salary or Availability

Question: When can you start?

Answer:

> I can start based on the company requirement. If there is a notice period or documents needed, I can coordinate properly.

Question: What is your expected salary?

Answer:

> My expected salary is negotiable depending on the role, benefits, and project responsibilities. I am open to discussing a fair offer based on my skills and experience.

## Quick Cheat Sheet

Remember these simple phrases:

- "I usually start by understanding the requirement."
- "I validate the input before sending it to the backend."
- "I handle loading, success, and error states."
- "I use Git branches and pull requests for team development."
- "I check logs, network requests, and error messages when debugging."
- "I am willing to learn and adapt to the team's process."

## Final Reminder

Speak slowly. Keep answers short. If you do not know something, be honest but show how you will solve it.

Good answer pattern:

> I have basic experience with that. I may need to review some details, but I understand the concept and I am willing to learn more.

