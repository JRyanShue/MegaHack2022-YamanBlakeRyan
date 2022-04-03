import './App.css';
import { Banner } from './Banner';
import { MainScreen } from './MainScreen';
import { useEffect, useState } from 'react';
import DailyIframe from '@daily-co/daily-js';

function App() {

  // const [callFrame, setCallFrame] = useState('nujll');

  function connectToRoom() {

    console.log('useEffect')
    const MY_IFRAME = document.getElementById('iframe');
    MY_IFRAME.setAttribute(
      'allow',
      'microphone; camera; autoplay; display-capture'
    );
    MY_IFRAME.style.height = '500px'
    MY_IFRAME.style.width = '1000px'
    MY_IFRAME.style.marginLeft = '50%'
    MY_IFRAME.style.transform = 'translate(-50%)';
    let room = { url: "https://popschools.daily.co/qOrbXQ3zJZC7o7aH8ycI" };

    document.body.appendChild(MY_IFRAME);

    // console.log(DailyIframe.wrap(MY_IFRAME, room))
    // setCallFrame(DailyIframe.wrap(MY_IFRAME, room));
    // setCallFrame('asdfasdfa')
    // console.log('callFrame', callFrame)

    const callFrame = DailyIframe.wrap(MY_IFRAME, room);
    callFrame.join();
  }

  useEffect(() => {
    
    connectToRoom();
    
  }, []);

  // function joinRoom() {
  //   console.log('joinRoom');
  //   setCallFrame('asdfasdfaa')
  //   console.log(callFrame);
  //   if (callFrame) {
  //     callFrame.join();
  //   }
  // }

  // joinRoom={joinRoom}/>
  return (
    <div className="App">
      <Banner/>  
      <div style={{
        left: '100px'
      }}>
        <MainScreen/>
      </div>
      {/* <MainScreen/> */}
      {/* <div id='call-frame' style={{
        height: '300px'
      }}> */}

      {/* </div> */}
    </div>
  );
}

export default App;
