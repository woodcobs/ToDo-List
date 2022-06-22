import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput,TouchableOpacity, Keyboard , ScrollView} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const[taskItems, setTaskItems] = useState([]);
  //const canClick = true;

  const handleAddTask = () => {
    Keyboard.dismiss();
    //console.log(task.getText);
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <ScrollView scrollEventThrottle={1} style={styles.items}>
          {/* This is where tasks will go*/}
          {
            taskItems.map((item, index) => {
              if (item != null && item != '') {
                //canClick = true;
                //console.log('can click status: ', canClick);
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item}/>
                  </TouchableOpacity>
                )
              } else {
                //canClick = false;
              }
            })
          }
        </ScrollView>
        
      </View>

      {/* Write a task*/}
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput 
        style={styles.input}
        placeholder={'Write a Task'}
        value={task}
        onChangeText={text => setTask(text)}
        />

        
        <TouchableOpacity 
        //disabled={!canClick} 
        onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    height: '80%'
  },
  sectionTitle: {
    paddingBottom: 20,
    fontSize: 34,
    fontWeight: 'bold'
  },
  items: {
    marginBottom: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    opacity: 1


  },
  addText: {
    fontSize: 40,
    fontWeight: '200',
    opacity: 1
  },
  addWrapperDisabled: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    opacity: .6


  },
  addTextDisabled: {
    fontSize: 40,
    fontWeight: '200',
    opacity: .6
  },
});
 