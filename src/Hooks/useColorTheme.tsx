import { useContext } from 'react'; 
import ColorThemeContext from '../Contexts/ColorTheme';

export function useColorTheme(){
    return useContext(ColorThemeContext);
}