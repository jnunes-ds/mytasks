import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

export function ThemeSwitch(){
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#483C67" }}
        thumbColor={isEnabled ? "#FF79C6" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.switchText}>{!isEnabled ? 'Light' : 'dark'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  switchText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff'
  },
});
