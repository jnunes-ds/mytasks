import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { ThemeSwitch } from './ThemeSwitch';

export function Header() {
  return (
    <>  
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
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
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
