import { createContext, useContext, useState } from 'react';
import { data } from './../data/data';
const DataContext = createContext({ sike: null });
const DataProvider = ({ children }) => {
  const [datalist, setDatalist] = useState(data);
  console.log(datalist);
  return (
    <DataContext.Provider value={{ datalist, setDatalist }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { DataProvider, useData };
