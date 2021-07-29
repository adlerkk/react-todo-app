import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const countEndedTask = ( data ) => {
  let count = 0;

  for(const element of data){
    if ( element.ended === true) {
      count += 1
    }
  };

  return count;
}

const Statistics = ({ data, saveLocalStorage, setUseLocalStorage, updateLS }) => {
  const taskCounter = data.length;
  const taskEnded = countEndedTask(data);

  const handleSaveClick = () => {
    localStorage.setItem('useLocalStorage', !saveLocalStorage);
    localStorage.setItem('tasks', JSON.stringify(data));
    setUseLocalStorage(!saveLocalStorage);
  };

  return (
    <div className={'Statistics'}>
      <div className={'Statistics--Count'}>{`${taskEnded} / ${taskCounter}`}</div>
      <div className={'Statistics--SaveLocal'}>
        <FontAwesomeIcon
          onClick={handleSaveClick}
          className={`Statistics--Icon ${saveLocalStorage ? 'Active' : ''}`}
          icon={faSave}
        />
      </div>
    </div>
  );
}

export default Statistics;
