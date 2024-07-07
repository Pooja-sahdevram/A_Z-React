import React from "react";
import UserContext from "../UserContext";
import { useContext } from "react";

//receive data
function Profile1() {
  const { User } = useContext(UserContext);
  if (!User) {
    return <div>Please Login</div>;
  } else {
    return <p>Welcom {User}</p>;
  }
}

export default Profile1;
