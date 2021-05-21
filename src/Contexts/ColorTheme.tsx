import React, { createContext } from 'react'
import { useState } from 'react';


const ColorThemeContext = createContext({});

export const ColorThemeProvider: React.FC = ({ children }) => {
    const [ nightMode, setNightMode ] = useState(false);

    return (
        <ColorThemeContext.Provider
            value={{
                nightMode,
                setNightMode
            }}
        >
            { children }
        </ColorThemeContext.Provider>
    );
}

export default ColorThemeContext;