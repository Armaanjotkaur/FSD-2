Implement Routing in Single Page Application (SPA)
Aim - To implement routing in a Single Page Application (SPA) using React Router, enabling navigation between multiple components without reloading the page.

Experiment Description:

In this experiment, routing is implemented in a React application using the react-router-dom package.
The application simulates a café website with multiple pages such as Home, Drinks, and Main Course.
Instead of loading a new page from the server, React Router dynamically renders components based on the URL path, maintaining the SPA behavior.

Components Used from react-router-dom
1. BrowserRouter

Acts as a wrapper for the entire application.
Uses the browser’s history API to manage navigation.
Ensures the UI stays in sync with the URL.

2. Routes

Acts as a container for all route definitions.
Ensures that only one matching route is rendered at a time.

3. Route

Maps a URL path to a specific component.
When the path matches, the corresponding component is rendered.

4. Link

Used for navigation between routes.
Prevents page reload and enables smooth client-side navigation.
Application Structure

#App.jsx

Acts as the root component.
Renders the ArmaanCafe component.

#ArmaanCafe.jsx

Contains navigation links and routing logic.
Uses BrowserRouter, Routes, Route, and Link.

#Home.jsx

Displays the home page content.
Drinks.jsx
Displays drinks-related content.

#MainCourse.jsx

Displays main course-related content.
Working of the Application
The application is wrapped inside BrowserRouter.
Navigation links are created using Link.
When a user clicks on a link:
The URL changes.
The corresponding component is rendered without refreshing the page.
Routing is handled smoothly using Routes and Route.


#Advantages of Routing in SPA

Faster navigation
No full page reload
Better user experience
Efficient component-based rendering

Conclusion - This experiment successfully demonstrates how routing can be implemented in a React Single Page Application using react-router-dom.
It shows how multiple pages can be handled dynamically while maintaining the performance and behavior of an SPA.
