import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import { useState } from 'react';

const countEndedTask = ( data ) => {
  let count = 0;

  for(const element of data){
    if ( element.ended === true) {
      count += 1
    }
  };

  return count;
}

const Panel = ({ data, saveLocalStorage, setUseLocalStorage, handleSearch }) => {
  const [ inputValue, setInputValue ] = useState('');
  const taskCounter = data.length;
  const taskEnded = countEndedTask(data);

  const handleSaveClick = () => {
    localStorage.setItem('useLocalStorage', !saveLocalStorage);
    localStorage.setItem('tasks', JSON.stringify(data));
    setUseLocalStorage(!saveLocalStorage);
  };

  const handleInputChange = ( event ) => {
    setInputValue(event.target.value);
    handleSearch(event.target.value);
  }

  return (
    <div className={'Panel'}>
      <div className={'Panel--Count'}>{`${taskEnded} / ${taskCounter}`}</div>
      <input
        type={'text'}
        className={'Panel--Input'}
        placeholder={'Search task...'}
        onChange={handleInputChange}
        value={inputValue}
      />
      <div className={'Panel--SaveLocal'}>
        <FontAwesomeIcon
          onClick={handleSaveClick}
          className={`Panel--Icon ${saveLocalStorage ? 'Active' : ''}`}
          icon={faSave}
        />
      </div>
    </div>
  );
}

export default Panel;
