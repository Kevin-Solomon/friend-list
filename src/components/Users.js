import React from 'react';
import { useUsers } from '../context/userContext';

function Users({ img, name, email, column, friends }) {
  const { setUsers } = useUsers();

  const setUser = () => {
    console.log(column);
    if (column === 'left') {
      setUsers(prevState => ({
        ...prevState,
        firstUser: { name, img, friends },
      }));
    } else if (column === 'right') {
      setUsers(prevState => ({
        ...prevState,
        secondUser: { name, img, friends },
      }));
    }
  };
  return (
    <div className="flex gap-5" onClick={setUser}>
      <img className="w-16 h-13 rounded-full" src={img} alt="avatar" />
      <div className="flex flex-col">
        <p className="text-left capitalize text-xl">{name}</p>
        <p className="text-stone-700/50">{email}</p>
      </div>
    </div>
  );
}

export default Users;
