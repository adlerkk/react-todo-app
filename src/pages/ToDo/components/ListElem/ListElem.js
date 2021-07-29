import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

import './styles.scss';

const ListElem = ({ data, deleteTask, updateTask }) => {
  const { taskName, ended } = data;
  const isCheckICO = ended ? 'Ended' : 'NotEnded';
  const isCheckName = ended ? 'NotEnded' : '';

  const handleDelete = () => {
    deleteTask(data);
  };

  const handleUpdate = () => {
    updateTask(data);
  };

  return (
    <div className='Task'>
      <FontAwesomeIcon
        onClick={handleUpdate}
        className={`Task--Icon ${isCheckICO}`}
        icon={faCheckCircle}
      />
      <div className={`Task--Name ${isCheckName}`}>
        {taskName}
      </div>
      <FontAwesomeIcon className='Task--Icon Trash' icon={faTrash} onClick={handleDelete}/>
    </div>
  );
}

export default ListElem;
