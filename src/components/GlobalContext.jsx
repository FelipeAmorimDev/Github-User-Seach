import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

  const [theme, setTheme] = React.useState("dark")

  React.useEffect(() => {
    const bodyColor = theme === "dark" ? "#141D2F" : "#F6F8FF"

    document.body.style.backgroundColor = bodyColor
  }, [theme])

  function handleChangeTheme() {
    setTheme((prevState) => prevState === "dark" ? "light" : "dark")
  }

  return (
    <GlobalContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}