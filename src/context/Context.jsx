import React, { createContext } from "react";

export const ContextLms = createContext();

const Context = ({ children }) => {
  return <ContextLms.Provider value={{}}>{children}</ContextLms.Provider>;
};

export default Context;
