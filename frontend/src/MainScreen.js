
import { useEffect } from 'react';

import Twilio from 'twilio-video';
const Video = Twilio.Video;

function MainScreen() {

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

  return (
    <div className="main-screen">
      
      <div className="video-container">

      </div>
    </div>
  );
}

export {MainScreen};