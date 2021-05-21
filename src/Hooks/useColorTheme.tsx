import { useContext } from 'react'; 
import ColorThemeContext from '../Contexts/ColorTheme';

export default function useColorTheme(){
    return useContext(ColorThemeContext);
}