import { useState } from 'react';
import './App.css';
import { useUsers } from './context/userContext';
import UserList from './components/UserList';

import { useData } from './context/dataContext';

function App() {
  const { users } = useUsers();
  const { datalist, setDatalist } = useData();
  const [name, setName] = useState('');
  const [friends, setFriends] = useState('');
  const [error, setError] = useState('');
  console.log(datalist, 'asd');
  console.log(users);
  let connect = '';
  function getConnections(firstName, secondName) {
    const user = datalist.filter(data => data.name === firstName);
    console.log(user);
    if (firstName === null || secondName === null) return;
    if (firstName === secondName) return 'They are the same user';
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
    console.log(connect);
    if (connect.length === 0) return;
    if (!connect.includes(users.firstUser.name)) {
      return users.firstUser.name + '>' + connect;
    } else {
      const splitArr = Array.from(new Set(connect.split('>')));
      console.log(splitArr);
      return splitArr.join('>');
    }
  };

  return (
    <>
      <div className="flex gap-4 justify-center items-center h-full w-full grow flex-col">
        <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-red-600">
          Friend List
        </h1>
        <h1>
          {getConnections(users.firstUser.name, users.secondUser.name)}
          {getString(connect)}
        </h1>
        <div className="flex justify-center items-center gap-11">
          <UserList column="left" />
          <UserList column="right" />
        </div>
        <input
          className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          value={friends}
          onChange={e => setFriends(e.target.value)}
        />
        <p>{error}</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            if (name === '' || friends === '') {
              setError('Enter Proper Credentials');
            } else {
              setDatalist(prev => [...prev, { name, friends: [friends] }]);
              setName('');
              setFriends('');
              setError('');
            }
          }}
        >
          Add User
        </button>
      </div>
    </>
  );
}

export default App;
