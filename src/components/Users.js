import React from 'react';

function Users({ img, name, email }) {
  return (
    <div className="flex gap-5">
      <img className="w-16 h-13 rounded-full" src={img} alt="avatar" />
      <div className="flex flex-col">
        <p className="text-left capitalize text-xl">{name}</p>
        <p className="text-stone-700/50">{email}</p>
      </div>
    </div>
  );
}

export default Users;
