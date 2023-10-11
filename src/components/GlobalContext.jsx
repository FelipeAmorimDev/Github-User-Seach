import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {

  const [theme, setTheme] = React.useState("dark")

  function handleChangeTheme() {
    setTheme((prevState) => prevState === "dark" ? "light" : "dark")
  }

  return(
    <GlobalContext.Provider value={{theme,setTheme,handleChangeTheme}}>
      {children}
    </GlobalContext.Provider>
  )
}