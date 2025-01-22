# React To-Do List Project

## Overview

This is a collaborative project to build a To-Do List application using **React** and **Bootstrap**. The project is split into two parts:

- **Hamza's role**: Focuses on the structure and styling of the application.
- **Friend's role**: Implements functionality such as adding, deleting, and marking tasks as complete.

---

## Features

1. **Add Tasks**: Users can type a task in the input field and add it to the list.
2. **Delete Tasks**: Users can remove tasks using a delete icon.
3. **Mark Tasks as Complete**: Clicking a task will apply a line-through style.

---

## Roles and Responsibilities

### Hamza's Responsibilities

- **Structure**:
  - Create the layout of the application using React components.
  - Use Bootstrap classes for responsive design.
- **Styling**:
  - Use `react-icons` for the delete button.
  - Style the application to make it visually appealing.
  - Add custom CSS for hover effects, completed task styles, and icon interactions.
- **Ensure compatibility**: Ensure the UI is prepared for dynamic functionality.

### Friend's Responsibilities

- **Functionality**:
  - Handle input changes and manage the task state.
  - Implement functionality to add tasks to the list.
  - Implement functionality to delete tasks.
  - Handle the logic to toggle the completed state of tasks.

---

## Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd todolist-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Additional Libraries

- **Bootstrap**:

  ```bash
  npm install bootstrap
  ```

  Import Bootstrap in `index.js`:

  ```javascript
  import "bootstrap/dist/css/bootstrap.min.css";
  ```

- **React Icons**:
  ```bash
  npm install react-icons
  ```

### 4. Start the Development Server

```bash
npm start
```

---

## File Structure

```
project-folder/
├── src/
│   ├── components/
│   │   ├── TodoList.js      // Main To-Do List component
│   │   └── ...              // Other components (if needed)
│   ├── index.js             // Entry point
│   ├── App.js               // Main App component
│   ├── App.css              // Custom styles
│   └── ...
├── public/
├── package.json
└── README.md
```

---

## Component Breakdown

### **TodoList Component**

- **Hamza's Part**:
  - Set up the structure using Bootstrap cards, input groups, and lists.
  - Add placeholders for dynamic task rendering.
  - Style components using Bootstrap and custom CSS.
- **Friend's Part**:
  - Implement functionality to handle state for tasks (e.g., `useState`).
  - Dynamically render tasks in the list.
  - Add event handlers for task actions (add, delete, mark as complete).

---

## Additional Notes

1. Use `React Icons` for the delete button (“RiDeleteBin6Line”).
2. Apply the "Press Start" font for input fields and "Playfair Display" font for other elements.

   - Fonts can be imported from Google Fonts:
     ```css
     @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Press+Start+2P&display=swap");
     ```
   - Add them to `App.css`:

     ```css
     body {
       font-family: "Playfair Display", serif;
     }

     input {
       font-family: "Press Start 2P", cursive;
     }
     ```

3. Tasks should have a hover effect for better UX.

---

## How to Collaborate

1. **Branching**:

   - Create separate branches for structure/styling and functionality.
   - Merge changes into the `main` branch after review.

2. **Testing**:
   - Ensure both functionality and UI elements work seamlessly.
   - Test the app in different screen sizes (Bootstrap responsiveness).

---

## Future Improvements

- Add categories or tags for tasks.
- Implement local storage to save tasks.
- Add a "Clear All" button.

---

Happy coding! 🚀
