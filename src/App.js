// import { useState } from 'react';
import './App.css';
import { useUsers } from './context/userContext';
import UserList from './components/UserList';
import { data } from './data/data';

function App() {
  const { users } = useUsers();
  let connect = '';
  function getConnections(firstName, secondName) {
    const user = data.filter(data => data.name === firstName);
    console.log(user);
    if (user.length === 0) return;
    if (user[0].friends.includes(secondName)) {
      connect += firstName;
      console.log('in if');
      connect += '>' + secondName;
    } else {
      for (let i = 0; i < user[0].friends.length; i++) {
        getConnections(user[0].friends[i], secondName);
      }
    }
  }
  const getString = () => {
    if (!connect.includes(users.firstUser.name)) {
      return users.firstUser.name + '>' + connect;
    } else {
      const splitArr = Array.from(new Set(connect.split('>')));

      return splitArr.join('>');
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-full w-full grow flex-col">
        <h1>
          {getConnections(users.firstUser.name, users.secondUser.name)}
          {getString(connect)}
        </h1>
        <div className="flex justify-center items-center gap-11">
          <UserList column="left" />
          <UserList column="right" />
        </div>
      </div>
    </>
  );
}

export default App;
