
import { useState } from 'react';
import { run, start } from './VideoFunctions';

function ClickableTherapist(props) {

  const [backgroundColor, setBackgroundColor] = useState('azure');

  const joinRoom = props.joinRoom;

  function grey() {
    setBackgroundColor('lightgrey');
  }
  function normal() {
    setBackgroundColor('azure');
  }

  function handleClick() {
    setBackgroundColor('grey');
    joinRoom();
  }

  return (
    <div onMouseEnter={grey} onMouseLeave={normal} onMouseDown={handleClick} onMouseUp={grey} style={{
      backgroundColor: backgroundColor,
    }}>
      {props.name}
    </div>
  )

}

export { ClickableTherapist };