import React, { createContext, useState } from "react";

export const ThemeContext = createContext([
  { allMessagesHeight: "83%" },
  () => {},
]);

const ThemeContextProvider = (props) => {
  const theme = useState({ allMessagesHeight: "83%" });
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
