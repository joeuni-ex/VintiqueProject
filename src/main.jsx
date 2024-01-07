import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/configStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 리듀서 적용 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
