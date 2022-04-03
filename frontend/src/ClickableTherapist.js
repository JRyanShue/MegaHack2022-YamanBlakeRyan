
import { useState } from 'react';
import { run, start } from './VideoFunctions';

function ClickableTherapist(props) {

  const [backgroundColor, setBackgroundColor] = useState('rgb(255, 203, 216)');

  const joinRoom = props.joinRoom;

  function grey() {
    setBackgroundColor('#f5eddc');
  }
  function normal() {
    setBackgroundColor('rgb(255, 203, 216)');
  }

  function handleClick() {
    setBackgroundColor('#413f3f');
    joinRoom();
  }

  return (
    <div onMouseEnter={grey} onMouseLeave={normal} onMouseDown={handleClick} onMouseUp={grey} style={{
      backgroundColor: backgroundColor,
    }} className='therapist'>
      {props.name} - {props.score}/100
    </div>
  )

}

export { ClickableTherapist };