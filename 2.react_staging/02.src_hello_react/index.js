//引入react核心库
import React from "react";
//引入react核心库
import { createRoot } from "react-dom/client";
import App from "./App";

/* 
  ReactDOM.render is no longer supported in React 18. 
  // Before
  import { render } from 'react-dom';
  const container = document.getElementById('app');
  render(<App tab="home" />, container);

  // After
  import { createRoot } from 'react-dom/client';
  const container = document.getElementById('app');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App tab="home" />); 
*/

//渲染App到页面
createRoot(document.getElementById("root")).render(<App />);
