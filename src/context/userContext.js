import { createContext, useContext, useState } from 'react';
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState({ firstUser: {}, secondUser: {} });
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

const useUsers = () => useContext(UserContext);

export { useUsers, UserProvider };
