import { useState } from 'react';

import { AddForm } from './components/AddForm';
import { List } from './components/List';
import { ListElem } from './components/ListElem';
import { Title } from './components/Title';
import { Image } from './components/Image';
import { Statistics } from './components/Statistics';

import data from './data';
import DecorationIMG from './images/Mountains.png';
import './styles.scss';

const loadTasks = () => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  if ( !tasks ) {
    tasks = data;
  };

  return tasks;
};

const loadSettings = () => {
  let useLocalStorage = JSON.parse(localStorage.getItem('useLocalStorage'));

  return useLocalStorage;
};

const ToDo = () => {
  const [ useLocalStorage, setUseLocalStorage ] = useState(loadSettings());
  const [ tasks, setTasks ] = useState(loadTasks());

  const updateLS = ( data, key='tasks' ) => {
    if ( useLocalStorage ){
      localStorage.setItem(key, JSON.stringify(data));
    };
  }

  const addTask = ( task ) => {
    const currentData = [...tasks, task];
    setTasks(currentData);
    updateLS(currentData);
  };

  const deleteTask = ( taskToDelete ) => {
    const currentData = tasks.filter((task) => task !== taskToDelete);
    setTasks(currentData);
    updateLS(currentData);
  };

  const updateTask = ( taskToUpdate ) => {
    let currentData = [...tasks];
    const index = currentData.findIndex((obj) => obj === taskToUpdate);

    currentData[index].ended = !currentData[index].ended;
    setTasks(currentData);
    updateLS(currentData);
  };

  return (
    <div className={'App'}>
      <Title title={'Simple ToDo App'} />
      <Image img={DecorationIMG} />
      <Statistics
        data={tasks}
        saveLocalStorage={useLocalStorage}
        setUseLocalStorage={setUseLocalStorage}
      />
      <List>
        {tasks.map((value, index) => {
          return (
            <ListElem
              key={index}
              data={value}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          );
        })}
      </List>
      <AddForm addNewTask={addTask} />
    </div>
  );
}

export default ToDo;
