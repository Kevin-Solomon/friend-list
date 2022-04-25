// import { useState } from 'react';
import './App.css';

import UserList from './components/UserList';

function App() {
  return (
    <div className="flex justify-center items-center h-full w-full grow">
      <div className="flex justify-center items-center gap-11">
        <UserList column="left" />
        <UserList column="right" />
      </div>
    </div>
  );
}

export default App;
