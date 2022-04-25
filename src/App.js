// import { useState } from 'react';
import './App.css';
import { useUsers } from './context/userContext';
import UserList from './components/UserList';
import { data } from './data/data';
import { useData } from './context/dataContext';

function App() {
  const { users } = useUsers();
  const { datalist, setDatalist } = useData();
  const [name, setName] = useState('');
  const [friends, setFriends] = useState('');
  console.log(datalist, 'asd');
  let connect = '';
  function getConnections(firstName, secondName) {
    const user = data.filter(data => data.name === firstName);
    console.log(user);
    if (user.length === 0) return;
    if (user[0].friends.includes(secondName)) {
      connect += firstName;
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
        <input className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        <input className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        <button
          onClick={() => setDatalist(prev => [...prev, { name, friends }])}
        >
          Add User
        </button>
      </div>
    </>
  );
}

export default App;
