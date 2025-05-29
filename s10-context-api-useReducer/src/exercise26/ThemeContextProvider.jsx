// Todo: Create & manage context in this file

import React from "react";

export const ThemeContext = React.createContext({
    theme: "",
    toggleTheme: () => { }
})

export default function ThemeContextProvider({ children })
{
    // Todo: Add the component code (incl. dynamic context value)
    const [theme, setTheme] = React.useState("light")

    function handleToggleTheme()
    {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const themeCtxVal = {
        theme: theme,
        toggleTheme: handleToggleTheme
    }

    return (
        <ThemeContext.Provider value={themeCtxVal}>
            {children}
        </ThemeContext.Provider>
    )
}
