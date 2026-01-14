Experiment 1: Single Page Application using React

Aim
To design and develop a Single Page Application (SPA) using React by creating multiple reusable components such as Home, About, and Contact, and to deploy the application on Netlify.

Description
This experiment focuses on understanding the basics of React and how it is used to build modern single page web applications.
A SPA loads a single HTML page and dynamically updates the content without reloading the entire page, resulting in faster performance and a smoother user experience.

The application is structured using multiple React components, each responsible for rendering a specific section of the website.

Technologies Used
React JS
JavaScript (ES6)
HTML
CSS
Node.js & npm
Netlify (for deployment)

Components Implemented
Home Component – Displays the landing page content
About Component – Provides information about the application
Contact Component – Displays contact details or a contact form
App Component – Acts as the main component that integrates all other components

Steps Performed
Installed Node.js and npm.
Created a new React application using create-react-app.
Organized the project structure into reusable components.
Implemented navigation between components without page reload.
Styled the components using CSS.
Tested the application locally using the development server.
Deployed the final React application on Netlify.

Output

A fully functional Single Page React Application 
Smooth navigation between Home, About, and Contact pages
Live hosted application accessible via Netlify


Learning Outcomes
Understood the concept of Single Page Applications
Learned how React components work
Gained experience in structuring a React project
Learned basic deployment of React apps using Netlify
Improved understanding of modern front-end development workflows

Conclusion
This experiment helped in gaining hands-on experience with React for building single page applications. It demonstrated how component-based architecture improves code reusability and maintainability, and how modern web applications can be easily deployed using cloud platforms like Netlify.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
