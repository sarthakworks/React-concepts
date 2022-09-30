import React, { createContext, useState } from 'react';

const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [a, setA] = useState(true);
  const ChangeA = (i) => {
    setIsLoading(response);
  };
  return (
    <MainContext.Provider
      value={{
        a,
        ChangeA,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export default MainContext;
