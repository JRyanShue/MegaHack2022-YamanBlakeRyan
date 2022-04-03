import './App.css';
import { Banner } from './Banner';
import { MainScreen } from './MainScreen';
import { useEffect, useState } from 'react';
import DailyIframe from '@daily-co/daily-js';
import Modal from 'react-modal';

function App() {

  const [callFramee, setCallFrame] = useState('nujll');
  const [_var, setVar] = useState(0);
  var __var = 0
  var callFrame

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
    MY_IFRAME.style.zIndex = '1'
    let room = { url: "https://popschools.daily.co/qOrbXQ3zJZC7o7aH8ycI" };

    document.body.appendChild(MY_IFRAME);

    // console.log(DailyIframe.wrap(MY_IFRAME, room))
    // setCallFrame(DailyIframe.wrap(MY_IFRAME, room));
    console.log(setCallFrame)
    setCallFrame('asdfasdfa')
    console.log('callFrame', callFramee)

    setVar(1)
    console.log('_var', _var)

    __var = 1
    console.log('__var', __var)

    callFrame = DailyIframe.wrap(MY_IFRAME, room);
    // callFrame.join();
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    
    connectToRoom();
    
  }, []);

  function joinRoom() {
    if (callFrame) {
      callFrame.join();
    }
  }

  const [leaveMeetingVisibility, setLeaveMeetingVisibility] = useState('hidden');

  return (
    <div className="App">
      <Banner joinRoom={joinRoom} leaveMeetingVisibility={leaveMeetingVisibility} setLeaveMeetingVisibility={setLeaveMeetingVisibility}/>  
      <MainScreen leaveMeetingVisibility={leaveMeetingVisibility} setModalOpen={setIsOpen}/>
      {/* <MainScreen/> */}
      {/* <div id='call-frame' style={{
        height: '300px'
      }}> */}

      {/* </div> */}
      {/* <div>
        {leaveMeetingVisibility}
      </div> */}
      <Modal isOpen={modalIsOpen}>
        <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
      </Modal>

    </div>
  );
}

export default App;
