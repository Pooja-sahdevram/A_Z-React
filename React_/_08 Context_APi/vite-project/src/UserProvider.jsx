import React from "react";
import UserContext from "./UserContext";

//children ==jo arra hai as it is pass kardo
function UserProvider({ children }) {
  const [User, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
