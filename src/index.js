import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// npm i js-cookie
// npm i react-loading
// npm install react-router-dom --save
// npm install sass-loader sass webpack --save-dev
// npm install react-bootstrap bootstrap
// npm i -s react-redux redux redux-thunk redux-devtools-extension
// npm install axios

// code jsconfig.json
// {
//   "compilerOptions": {
//     "baseUrl": "src"
//   },
//   "include": ["src"]
// }
