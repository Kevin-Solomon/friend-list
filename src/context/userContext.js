import { createContext, useContext, useState } from 'react';
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState({
    firstUser: { name: null, friends: [] },
    secondUser: { name: null, friends: [] },
  });
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

const useUsers = () => useContext(UserContext);

export { useUsers, UserProvider };
