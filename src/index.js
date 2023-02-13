import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

const enableConcurrentMode = false;

if (enableConcurrentMode) {
    /* This crash Swiper */
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
} else {
    /* Will display the following warning:
     *
     * Warning: ReactDOM.render is no longer supported in
     * React 18. Use createRoot instead. Until you switch
     * to the new API, your app will behave as if it's
     * running React 17. Learn more:
     * https://reactjs.org/link/switch-to-createroot
     */
    ReactDOM.render(<App />, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
