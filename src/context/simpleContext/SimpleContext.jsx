import React, { createContext, useState } from "react";

const SimpleContext = createContext();
export const SimpleProvider = ({ children }) => {
  const [Text, setText] = useState("Text from Context");
  function ChangeText(e) {
    setText(e.target.value);
  }
  return (
    <SimpleContext.Provider
      value={{
        Text,
        ChangeText,
      }}
    >
      {children}
    </SimpleContext.Provider>
  );
};
export default SimpleContext;
