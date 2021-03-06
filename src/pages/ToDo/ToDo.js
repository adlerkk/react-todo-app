import { useState } from 'react';

import { Title } from './components/Title';
import { Image } from './components/Image';
import { Panel } from './components/Panel';
import { List } from './components/List';
import { ListElem } from './components/ListElem';
import { AddForm } from './components/AddForm';

import DecorationIMG from './images/Mountains.png';
import data from './data';
import './styles.scss';

const loadTasks = () => {
  const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
  const tasks = localStorageTasks ? localStorageTasks : data;

  return tasks;
};

const loadSettings = () => {
  let useLocalStorage = JSON.parse(localStorage.getItem('useLocalStorage'));

  return useLocalStorage;
};

const ToDo = () => {
  const [ tasks, setTasks ] = useState(loadTasks());
  const [ searchData, setSearchData ] = useState(tasks);
  const [ useLocalStorage, setUseLocalStorage ] = useState(loadSettings());

  const handleSearch = ( value ) => {
    if ( value.length > 1) {
      const currentData = tasks.filter((task) => task.taskName.includes(value));
      setSearchData(currentData);
    } else {
      setSearchData(tasks);
    };
  };

  const updateLS = ( data, key='tasks' ) => {
    if ( useLocalStorage ){
      localStorage.setItem(key, JSON.stringify(data));
    };
  }

  const addTask = ( task ) => {
    const currentData = [...tasks, task];
    setSearchData(currentData);
    setTasks(currentData);
    updateLS(currentData);
  };

  const deleteTask = ( taskToDelete ) => {
    const currentData = tasks.filter((task) => task !== taskToDelete);
    setSearchData(currentData);
    setTasks(currentData);
    updateLS(currentData);
  };

  const updateTask = ( taskToUpdate ) => {
    let currentData = [...tasks];
    const index = currentData.findIndex((obj) => obj === taskToUpdate);

    currentData[index].ended = !currentData[index].ended;
    setSearchData(currentData);
    setTasks(currentData);
    updateLS(currentData);
  };

  return (
    <div className='App'>
      <Title title='Simple ToDo App' />
      <Image img={DecorationIMG} />
      <Panel
        data={tasks}
        handleSearch={handleSearch}
        saveLocalStorage={useLocalStorage}
        setUseLocalStorage={setUseLocalStorage}
      />
      <List>
        {searchData.map((value, index) => {
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
