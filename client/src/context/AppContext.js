import React, { createContext, useState } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
