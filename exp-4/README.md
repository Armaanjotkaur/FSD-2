Experiment-4 State Management (Redux / Context API)

Aim
To understand and implement state management in a React Single Page Application using Local State, Context API, and Redux, and to observe how data is shared and updated across multiple components.

Experiment Description
In this experiment, a React-based Single Page Application was developed to demonstrate different types of state management.
Initially, local state was implemented using the useState hook inside individual components.
Later, global state was implemented using Context API and Redux to share data across multiple components without prop drilling.

The experiment helps in understanding how state controls UI behavior and how different state management techniques affect scalability and maintainability.

Introduction to State
In modern Single Page Applications (SPAs), state represents the data that determines how the user interface behaves and what it displays at any given time.

Examples of State
User login status
Theme (light / dark mode)
Shopping cart items
Form input values

Types of State Implemented
1️. Local State
Managed inside a single component
Implemented using the useState hook
Suitable for component-specific data

Example:
Counter value inside an individual component (C1, C2)

2️. Global State
Shared across multiple components
Centralized state management
Eliminates prop drilling

Global state was implemented using:
Context API
Redux

Problems Without State Management
Prop Drilling
Passing data through multiple components unnecessarily
Unpredictable UI Behavior
Difficult to track where and how state changes
Poor Scalability
Hard to manage large and complex applications

Context API Implementation
Context API was used to share state between multiple components.

Context Flow
Provider → Consumer Components

Features
Built-in React feature
Easy to implement
Suitable for small to medium applications

Redux Implementation
Redux was used to manage global state in a predictable way.
Redux Core Principles
Single source of truth
State is read-only
State changes occur through reducers

Redux Architecture Flow
User Action → Dispatch Action → Reducer → Store → UI Update


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
