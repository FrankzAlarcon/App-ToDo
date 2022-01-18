import React, { useState } from 'react';
import '@styles/ChangeAlert.css';

function ChangeAlert({show, toggleShow}) {
  const onRefresh = () => {
    toggleShow(false);
    window.location.reload()
  }
  if (show) {
    return (
      <div className='modal-change-alert'>
        <div className='change-alert-container'>
          <p className='change-alert-message'>Han ocurrido cambios</p>
          <button 
            className='change-alert-button'
            onClick={onRefresh}
          >Actualizar información</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener('storage', (event) => {
      if(event.key === 'TODOS_V1'){
        setStorageChange(true);
      }
    });
    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={setStorageChange}
      />
    );
  }
}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export default ChangeAlertWithStorageListener;