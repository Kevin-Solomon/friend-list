import React from 'react';
import Users from './Users';
import { users } from './../data/data';
import { useUsers } from './../context/userContext';
function UserList({ column }) {
  const { user } = useUsers();
  const getUserImg = () => {
    if (column === 'left') {
      return (
        user?.firstUser?.img ||
        'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
      );
    }
    if (column === 'right') {
      return (
        user?.secondUser?.img ||
        'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
      );
    }
  };
  const getUserName = () => {
    if (column === 'left') return user?.firstUser?.name || 'Pick an user';
    if (column === 'right') return user?.secondUser?.name || 'Pick an user';
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-20 h-13 rounded-full"
          src={getUserImg()}
          alt="avatar"
        />
        <h2>{getUserName()}</h2>
      </div>
      {users.map((user, index) => {
        return (
          <Users
            img={`https://i.pravatar.cc/150?img=${index}`}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
}

export default UserList;
