import React, { createContext, useState } from 'react';

interface IColorThemeContext{
    nightMode: boolean;
    setNightMode: (arg: boolean) => void
}

const ColorThemeContext = createContext({} as IColorThemeContext);

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