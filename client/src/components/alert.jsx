import React from 'react';
import {useSelector} from 'react-redux'
import './alert.css';


const Alert = () => {
  const alert = useSelector(state => state.alert)
  return alert.visibility ? (
    <div className='alert'>
      <i className='fas fa-info-circle'></i> {alert.message}
    </div>
  ) : null;
};

export default Alert;
