
import {useState} from 'react';

var exampleJson = {
  "available_therapists": [
    {"name": "Dr. Smith", "id": "1", "score": "90.5"},
    {"name": "Dr. Jones", "id": "2", "score": "80.5"},
    {"name": "Dr. Brown", "id": "3", "score": "70.5"},
    {"name": "Dr. Wilson", "id": "4", "score": "60.5"},
  ]
}

function Banner() {

  const [availableTherapists, setAvailableTherapists] = useState(exampleJson);

  const [therapistsDisplay, setTherapistsDisplay] = useState(<div></div>);

  function updateTherapistsDisplay( availableTherapists ) {

    for (therapist in availableTherapists["available_therapists"]) {

      

    }

  }

  return (
    <div className="banner">
      Hello World!
      {JSON.stringify(availableTherapists)}
    </div>
  );
}

export {Banner};