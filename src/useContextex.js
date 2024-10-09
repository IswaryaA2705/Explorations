import { createContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const user = {
    username: "Indra",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
