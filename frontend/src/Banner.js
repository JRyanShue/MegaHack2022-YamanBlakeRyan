
import { useState, useEffect } from 'react';
import { ClickableTherapist } from './ClickableTherapist';

var exampleJson = {
  "available_therapists": [
    {"name": "Dr. Smith", "id": "1", "score": "90.5"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5"},
    {"name": "Dr. Smith", "id": "1", "score": "90.5"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5"},
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
          <ClickableTherapist name={therapist.name} score={therapist.score/100} joinRoom={props.joinRoom}/>
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
      <div className="label">
        Available People to Talk To:
      </div>
      <br/>
      <div className="therapists-list">
        {therapistsDisplay}
      </div>
    </div>
  );
}

export {Banner};