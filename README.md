# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Add `tailwind.connfig.js` In your main directory

Add the code bellow :

`module.exports = {
  purge: {
    enable: process.env.NODE_ENV !== "development",
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./node_modules/chat-bot-ai/**/*.{vue,js,ts,jsx,tsx}",
    ],
  },
};
`

### Genrate `API Key from ` [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

Add the api key in `.env` file Name it

**`REACT_APP_API_URL:Your API KEY`**

### Run `npm install chat-bot-ai`

Install Chat-bot-ai Dependency in your project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
