
import { useState, useEffect } from 'react';
import { ClickableTherapist } from './ClickableTherapist';

var exampleJson = {
  "available_therapists": [
    {"name": "Dr. Smith", "id": "1", "score": "90.5", "time_available": "30 minutes"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5", "time_available": "15 minutes"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5", "time_available": "20 minutes"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5", "time_available": "15 minutes"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5", "time_available": "25 minutes"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5", "time_available": "1 hour"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5", "time_available": "2 hours"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5", "time_available": "90 minutes"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5", "time_available": "80 minutes"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5", "time_available": "35 minutes"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5", "time_available": "45 minutes"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5", "time_available": "40 minutes"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5", "time_available": "10 minutes"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5", "time_available": "15 minutes"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5", "time_available": "50 minutes"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5", "time_available": "1 hour"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5", "time_available": "75 minutes"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5", "time_available": "20 minutes"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5", "time_available": "25 minutes"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5", "time_available": "30 minutes"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5", "time_available": "25 minutes"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5", "time_available": "85 minutes"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5", "time_available": "30 minutes"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5", "time_available": "40 minutes"},
  ]
}

function Banner(props) {

  const [availableTherapists, setAvailableTherapists] = useState(exampleJson);

  const [therapistsDisplay, setTherapistsDisplay] = useState(<div></div>);

  // console.log(availableTherapists["available_therapists"].map((therapist) => {

  //   {
  //     return (
  //       <div>
  //         {therapist}
  //       </div>
  //     )
  //   }

  // }))

  function updateTherapistsDisplay( availableTherapists ) {

    console.log('available therapists:', availableTherapists.available_therapists)

    setTherapistsDisplay( availableTherapists.available_therapists.map((therapist) => {
      {
        console.log('therapist:', therapist)
        return (
          <ClickableTherapist name={therapist.name} score={therapist.score} timeAvailable={therapist.time_available} joinRoom={props.joinRoom} leaveMeetingVisibility={props.leaveMeetingVisibility} setLeaveMeetingVisibility={props.setLeaveMeetingVisibility}/>
        )
      }
    }));

  }

  useEffect(() => {
    updateTherapistsDisplay( availableTherapists );
    // console.log('availableTherapists:', availableTherapists);
  }, []);

  return (
    <div className="banner">

      <div className="label-container">
        <div className="label">
          Welcome to Therapize! - Here are some people who are available to talk:
        </div>
      </div>

      <br/>
      <div className="therapists-list">
        {therapistsDisplay}
      </div>

    </div>
  );
}

export {Banner};
