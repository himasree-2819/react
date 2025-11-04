import { Children, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ Children }) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);


    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <div style={{
                background: darkMode ? '#333' : '#fff',
                color: darkMode ? '#fff' : '#333',
                minHeight: '100vh',
                padding: '1 rem'
            }}>

            </div>

        </ThemeContext.Provider>
    )
}