
import { useState } from 'react';

function ClickableTherapist(props) {

  const [backgroundColor, setBackgroundColor] = useState('azure');

  function grey() {
    setBackgroundColor('lightgrey');
  }
  function normal() {
    setBackgroundColor('azure');
  }

  function handleClick() {
    setBackgroundColor('grey');
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