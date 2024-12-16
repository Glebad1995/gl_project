# Todo App

## Description

A simple and elegant **Todo App** built with modern web development technologies. This application allows users to manage their tasks effectively, with features such as adding, completing, deleting tasks, and viewing task statistics.

## Features

- **Add tasks** with a title.
- **Mark tasks as completed**.
- **Delete individual tasks**.
- **Clear all completed tasks** with a single click.
- **Persistent data storage** using `localStorage`.
- **Responsive design** with `TailwindCSS`.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: For static typing and improved developer experience.
- **TailwindCSS**: For fast and customizable styling.
- **LocalStorage**: To save tasks between sessions.
- **Lucide-react**: For modern icons.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/todo-app.git
   cd todo-app
   ```
2. Install dependencies:

   bash
   npm install

3. Start the development server:

   bash
   npm start

The app will be available at http://localhost:3000 in your browser.

## Project Structure

```
src/
├── components/
│ ├── AddTodoForm.tsx // Form for adding new todos
│ ├── TodoItem.tsx // Single todo item
│ ├── TodoList.tsx // List of todos
│ ├── TodoSummary.tsx // Summary of completed tasks
├── hooks/
│ ├── useTodos.ts // Custom hook for managing todo logic
├── data/
│ ├── todos.ts // Dummy data for initial todos
├── types/
│ ├── todo.ts // Type definition for Todo objects
├── App.tsx // Main app component
└── index.tsx // Entry point
```

## How to Use

1.Open the app in your browser.
2.Add a task by typing in the input box and pressing Add.
3.Mark a task as completed by checking the checkbox.
4.Delete a task using the trash icon.
4.View task completion statistics and delete all completed tasks.

## How to Use

Add support for task deadlines.
Introduce task categories.
Implement dark mode.

## Author

Developed by Gleb Vigurskiy.

Feel free to contribute or provide feedback to improve the app!
