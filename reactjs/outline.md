## History of react js
- 2011: Created by Jordan Walke at Facebook for internal use, inspired by XHP.
- 2013: Open-sourced at JSConf US, initially criticized for JSX syntax.
- 2014: Adopted by Facebook (News Feed) and Instagram for large-scale applications.
- Virtual DOM: Introduced as a core feature for efficient rendering and updates.
- 2015: React Native launched for cross-platform mobile development.
- Redux (2015): State management library created by Dan Abramov and Andrew Clark.
- 2019 (Hooks): Simplified state and effects in functional components.

## What is react js?
- React js is a javascript library for building user interfaces.
- React js is used to build single-page applications.
- React js is used to build mobile applications.
- React js is used to build desktop applications.
- React js is used to build web applications.

## Why react js over vanilla js?
- Component-based architecture for better code organization and reusability
- Virtual DOM for efficient UI updates and better performance
- Declarative syntax making code more predictable and easier to debug
- Rich ecosystem with many libraries and tools
- Strong community support and extensive documentation
- JSX allows writing HTML-like code in JavaScript
- One-way data flow making state management more predictable
- Cross-platform development capabilities (web, mobile, desktop)
- Built-in optimization features like automatic batching
- Easy integration with other libraries and frameworks

## What is Virtual DOM?
- Virtual DOM is a lightweight copy of the actual DOM kept in memory
- It's a programming concept where an ideal, virtual representation of UI is kept in memory
- When state changes occur, React:
  - Creates a new virtual DOM tree
  - Compares it with previous virtual DOM (diffing)
  - Calculates minimal number of changes needed
  - Updates only the changed elements in real DOM
- Benefits:
  - Faster than directly manipulating real DOM
  - Batches multiple changes together
  - Cross-platform since it's not tied to browser's DOM
  - Enables declarative UI updates
- Acts as a layer between developer's code and actual DOM operations

## How react js works?
- JSX gets transformed into React elements via compilation
- React elements describe what should appear on screen
- Components return these elements based on props and state
- Virtual DOM maintains a tree of these elements
- When data changes:
  - New Virtual DOM tree is created
  - Diffing algorithm compares old and new trees
  - Minimal set of changes calculated
  - Real DOM updated efficiently
- Component lifecycle:
  - Mounting: Component added to DOM
  - Updating: Props or state changes
  - Unmounting: Component removed
- Hooks manage state and side effects in functional components
- Event handling triggers state updates
- Re-rendering occurs when:
  - State changes
  - Props change
  - Parent component re-renders

### Direct DOM Manipulation (getElementById):
- Directly updates single element without considering other changes
- Each DOM operation triggers reflow/repaint of browser
- Multiple updates = Multiple expensive browser operations
- Can lead to performance issues with frequent updates
- Code becomes harder to maintain with complex UI updates

### Virtual DOM Approach:
- Batches multiple changes together into single update
- Calculates most efficient way to update real DOM
- Only updates what actually changed
- Reduces number of expensive browser operations
- Example scenario:
  - Updating 10 elements:
    - getElementById: 10 separate DOM operations
    - Virtual DOM: 1 efficient batch update
- Maintains clean, declarative code structure
- Handles complex UI updates more efficiently
- Better performance for dynamic content
- Easier to maintain and debug


# Key Features of React.js
- Component-Based Architecture
- Virtual DOM for efficient updates
- Unidirectional data flow
- JSX syntax for writing UI components
- Rich ecosystem and community
- Declarative UI development
- Cross-platform development support
- Reusable UI components
- State management capabilities
- Efficient rendering with reconciliation

## Create a new project
- Create a new project folder
- Run `npm create vite@latest . -- --template react`
- Run `npm install`
- Run `npm run dev`

## JSX
- Understanding JSX: Learn the syntax that combines JavaScript and HTML for React components.
- JSX Expressions: Explore embedding dynamic values in JSX using {}.
- Conditional Rendering: Implement conditional logic to render components dynamically.
- Lists and Keys: Render lists of data with unique keys to optimize rendering.
- Handling Events: Understand React’s event system and how to handle user interactions.
- Event Handling in React: Use onClick, onChange, and other event handlers in components.
- Event Object: Access and utilize event properties to handle DOM events effectively.
- State Updates and Event Handlers: Manage component state changes in response to user actions.

## createElement function in JSX
- React.createElement() is the core function that JSX compiles into
- Takes 3 arguments:
  1. Element type (HTML tag or component)
  2. Properties/props object 
  3. Children elements
- Example JSX:
  ```jsx
  <div className="container">
    <h1>Hello</h1>
  </div>
  ```
- Compiles to:
  ```js
  React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', null, 'Hello')
  )
  ```
- JSX makes code more readable compared to raw createElement calls
- Babel handles the compilation from JSX to createElement
- Understanding createElement helps debug JSX issues
