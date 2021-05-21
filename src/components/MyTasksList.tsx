import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps, StyleSheetProperties } from 'react-native';
import useColorTheme from '../Hooks/useColorTheme';
import { ColorThemeProvider } from '../Contexts/ColorTheme';

function FlatListHeaderComponent() {
  const { nightMode } = useColorTheme();
  return (
    <View>
      <Text style={[styles.header, nightMode && {color: '#FF79C6'}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}


export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const { nightMode } = useColorTheme();

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
            <TouchableOpacity
              style={[
                styles.taskButton, 
                item.done && styles.taskButtonDone,
                (nightMode && item.done) && styles.taskButtonDoneDark
              ]}
              testID={`button-${index}` }
              activeOpacity={0.7}
              onPress={() => onPress(item.id)}
              onLongPress={() => onLongPress(item.id)}
            >
            <View 
              testID={`marker-${index}`}
              style={[
                styles.taskMarker, 
                item.done && styles.taskMarkerDone,
                nightMode && styles.taskMarkerDark,
                (nightMode && item.done) && styles.taskMarkerDoneDark
              ]}
            />
            <Text 
              style={[
                styles.taskText, 
                item.done && styles.taskTextDone,
                nightMode && styles.taskTextDark,
                (nightMode && item.done) && styles.taskTextDoneDark
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDark: {
    borderColor: '#FF79C6'
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#FF79C6'
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    backgroundColor: '#FF79C63f'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    backgroundColor: '#FF79C6'
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneDark: {
    color: '#E1E1E68F'
  }
})