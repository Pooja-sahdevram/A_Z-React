import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function Love() {
  console.log("hello");
}
let user = {
  type: "student",
  Name() {
    console.log(this.type);
  },
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <App />,
  Love(),
  user.Name()
);
