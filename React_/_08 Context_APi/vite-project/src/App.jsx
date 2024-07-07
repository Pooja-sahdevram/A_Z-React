import React from "react";
import UserProvider from "./UserProvider";
import Profile1 from "./components/Profile1";
import Login from "./components/Login";

function App() {
  return (
    <UserProvider>
      <Login />
      <Profile1 />
    </UserProvider>
  );
}

export default App;
