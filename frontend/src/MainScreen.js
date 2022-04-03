
import { useEffect, useState } from 'react';

import DailyIframe from '@daily-co/daily-js';
import { LeaveButton } from './LeaveButton';

function MainScreen(props) {

  // useEffect(() => {
  //   const { connect } = require('twilio-video');

  //   let room = connect('5434ea943465beca6101f1f571127e4e', { name:'my-new-room' }).then(room => {
  //     console.log(`Successfully joined a Room: ${room}`);
  //     room.on('participantConnected', participant => {
  //       console.log(`A remote Participant connected: ${participant}`);
  //     });
  //   }, error => {
  //     console.error(`Unable to connect to Room: ${error.message}`);
  //   }).then(room => {
  //     console.log(room)
  //   });
  // }, []);

  // async joinRoom() {
  //   try {
  //     const response = await fetch(`https://{your-endpoint}?identity=${this.state.identity}`);
  //     const data = await response.json();
  //     const room = await connect(data.accessToken, {
  //       name: 'cool-room',
  //       audio: true,
  //       video: true
  //     });
  
  //     this.setState({ room: room });
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  // const callFrame = null;

  // useEffect(() => {
  //   const MY_IFRAME = document.getElementById('iframe');
  //   MY_IFRAME.setAttribute(
  //     'allow',
  //     'microphone; camera; autoplay; display-capture'
  //   );
  //   MY_IFRAME.style.height = '500px'
  //   MY_IFRAME.style.width = '1000px'
  //   // MY_IFRAME.style.margin = 'auto'
  //   MY_IFRAME.style.marginLeft = '50%'
  //   MY_IFRAME.style.transform = 'translate(-50%)';
  //   // MY_IFRAME.style.justifyContent = 'center'
  //   // MY_IFRAME.style.display = 'flex'
  //   // MY_IFRAME.style.top = '50px'
  //   let room = { url: "https://popschools.daily.co/qOrbXQ3zJZC7o7aH8ycI" };

  //   document.body.appendChild(MY_IFRAME);

  //   const callFrame = DailyIframe.wrap(MY_IFRAME, room);

  //   // const callFrame = window.DailyIframe.createFrame({
  //   //   iframeStyle: {
  //   //     position: 'fixed',
  //   //     border: '1px solid black',
  //   //     width: '375px',
  //   //     height: '450px',
  //   //     right: '1em',
  //   //     bottom: '1em',
  //   //   },
  //   //   showLeaveButton: true,
  //   //   showFullscreenButton: true,
  //   // });
    
  // }, []);

  // function joinRoom() {
  //   if (callFrame) {
  //     callFrame.join();
  //   }
  // }

  // const [leaveMeetingVisibility, setLeaveMeetingVisibility] = useState('hidden');

  // if (props.leaveMeetingVisibility == 'true') {
  //   setLeaveMeetingVisibility('show');
  // }

  return (
    <div className="main-screen">
      
      <div className="video-container">
        <iframe id='iframe' className='video-iframe'>

        </iframe>
      </div>

      <div style={{
        visibility: props.leaveMeetingVisibility
      }}>
        <LeaveButton setModalOpen={props.setModalOpen}/>
      </div>
      
      {/* asdfasdf
      {props.roomJoined} */}
      {/* {props.leaveMeetingVisibility} */}
    </div>
  );
}

export {MainScreen};