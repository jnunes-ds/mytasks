import React, { ReactChildren, ReactComponentElement } from 'react';
import useColorTheme from '../Hooks/useColorTheme';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export const Background: React.FC = ({children}) => {
    const { nightMode } = useColorTheme();

    return (
        <View
            style={nightMode ? styles.bgDark : styles.bgLight}
        >
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    bgLight: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    bgDark: {
        backgroundColor: '#191622',
        flex: 1
    }
});
