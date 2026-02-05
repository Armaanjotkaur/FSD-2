Experiment 6 – Forms and Validation using Material UI

Aim
To design an interactive login form using Material UI components and implement client-side validation in React.

Learning Objectives
Use Material UI form components
Create controlled form inputs
Implement validation logic
Display error messages
Handle form submission

Theory
Forms collect user input. In React, controlled components store input values in state.
Validation checks data before submission.

Material UI provides ready-made components like TextField, Button, and Container to quickly build professional UI.

Key Concepts
Concept	Description
Controlled Components - Input values managed using React state
Validation - Checking input correctness
Error Handling - Showing messages to users
Material UI - UI component library for React

Code Explanation
useState -
Stores form input values and error messages.
validate() -
Checks email format and password length. Returns true if valid.
TextField -
Material UI input component with built-in error styling.
helperText -
Displays validation error messages below input fields.

Output
User sees styled login form
Error messages appear for invalid inputs
Success alert on valid submission

Conclusion
Material UI makes form creation simple and improves validation handling in React.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
