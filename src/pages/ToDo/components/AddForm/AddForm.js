import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import './styles.scss';
import { useState } from "react";

const AddForm = ({ addNewTask }) => {
  const [ taskName, setTaskName ] = useState('');
  let newTask = {
    taskName: taskName,
    ended: false
  }

  const pushNewTask = () => {
    addNewTask(newTask);
    setTaskName('');
  };

  const handleNewTask = ( event ) => {
    setTaskName(event.target.value);
  };

  return (
    <div className={'AddForm'}>
      <input
        className={'AddForm--Input'}
        type={'text'}
        value={taskName}
        onChange={handleNewTask}
        placeholder={'Add new task...'}
      />

      <FontAwesomeIcon
        className={`AddForm--Icon ${taskName ? 'Active' : ''}`}
        icon={faPlusCircle}
        onClick={taskName ? pushNewTask : null}
      />
    </div>
  );
}

export default AddForm;
