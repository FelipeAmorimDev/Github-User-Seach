import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {

  const [theme, setTheme] = React.useState("dark")

  return(
    <GlobalContext.Provider value={{theme,setTheme}}>
      {children}
    </GlobalContext.Provider>
  )
}