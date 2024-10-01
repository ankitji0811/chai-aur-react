# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Password Generator

A simple password generator built with React and styled using Tailwind CSS. This project allows users to generate random passwords with customizable options such as length, inclusion of special characters,and numbers. The generated password can be copied to the clipboard with a single click.

### Feature

- Supports different character types: letters, numbers, special characters, and uppercase letters.
- Copy the generated password to the clipboard.
- Responsive design using Tailwind CSS.

### Technologies Used

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.

### Hooks and Concepts

This project makes use of several React hooks and concepts:

- useState: To manage the state of the password, options, and settings like password length.
- useRef: For accessing the generated password field to copy it to the clipboard.
- useEffect: For updating the password whenever any of the user preferences change (such as password length or character options).
- useCallback: To memoize functions and prevent unnecessary re-renders, improving performance.
- Clipboard: The project uses the browser's clipboard API to allow users to copy the generated password with a single click.





