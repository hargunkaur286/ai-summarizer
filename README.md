# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


STEP 1: npm create vite@latest
STEP 2: delete unnecessary files
STEP 3: npm i @reduxjs/toolkit
STEP 4: download the zip folder and move it to the src file. 
STEP 5: Add App.jsx and App.css and copy paste the css from the github gist
STEP 6: Install tailwind css with vite. customizing the tailwind by adding fonts in tailwind.config.js and putting those fonts in the index.html
STEP 7: Added the Hero and Demo File.
STEP 8: we will be making a store.js file, which will configure a store which is a global state to store entire info of the application. but in most of the cases, we do not need the whole info, we just need a bit of it, so, for it, we will use the articleApi in the reducer function. 