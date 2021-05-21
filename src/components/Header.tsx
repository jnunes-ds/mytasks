import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { ThemeSwitch } from './ThemeSwitch';
import useColorTheme from '../Hooks/useColorTheme';

export function Header() {
  const { nightMode } = useColorTheme();

  return (
    <>  
      <View style={[styles.header, nightMode && styles.headerDark]}>
        <Text style={[styles.headerText, nightMode && styles.headerTextDark]}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }, nightMode && styles.headerTextDark]}>do</Text>
      </View>

      <View style={styles.switch}>
        <ThemeSwitch/>
      </View>
    </>  
  )
}

const styles = StyleSheet.create({
  switch:{
    position: 'absolute',
    marginTop: 55,
    marginLeft: 350,
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerDark: {
    backgroundColor: '#483C67',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerTextDark: {
    color: '#E1E1E6'
  }
});
