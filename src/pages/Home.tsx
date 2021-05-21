import React, { Fragment, useEffect, useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { ColorThemeProvider } from '../Contexts/ColorTheme';
import { Background } from '../components/Background';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refreshPage, setRefreshPage] = useState(false); 


  function handleAddTask(newTaskTitle: string) {
    // TODO - add new task if it's not empty
    if(newTaskTitle){
      if(typeof newTaskTitle === 'string' && newTaskTitle != ''){
        const task: Task = {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false
        }
        
        setTasks(oldState => [ ...oldState, task ]);
      }
    }else{
      Alert.alert('Warning!', 'You need to tell us the name of the task.')
    }
  }

  function handleMarkTaskAsDone(id: number) {
    let TASKS = tasks;
    let refresh = !refreshPage;

    TASKS.map(item => {
      if(item.id === id){
        item.done = !item.done;
      }
      return item;
    });
    setTasks(TASKS);
    setRefreshPage(refresh);
  }
  
  function handleRemoveTask(id: number) {
    const deleteTask = () => {
      let TASKS: Array<Task> = [];

      tasks.filter(item => {
        if(item.id !== id){
          TASKS.push(item)
        }
      });

      setTasks(TASKS);
    }

    Alert.alert('Delete', 'Are you sure you want to delete this task?', [
      {
        text: 'Cancel',
        onPress: () => {}
      },
      {
        text: 'Delete',
        onPress: deleteTask
      }
    ])
  }
  useEffect(() => {
    
  },[refreshPage])

  
  return (
    <>
      <ColorThemeProvider>
      <Background>

          <Header />

          <TodoInput addTask={handleAddTask} />

          <MyTasksList 
            tasks={tasks} 
            onPress={handleMarkTaskAsDone} 
            onLongPress={handleRemoveTask} 
            />
      </Background>
      </ColorThemeProvider>
    </>
  )
}
