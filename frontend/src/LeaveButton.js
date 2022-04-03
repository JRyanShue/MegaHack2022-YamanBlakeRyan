
import { useState } from 'react'

function LeaveButton(props) {

    const [backgroundColor, setBackgroundColor] = useState('lightpink');

    function getReviewSentiment(review) {

        const response = fetch( 'http://127.0.0.1:5000/review?_review=' + review,
        {
            method: 'POST',
        } ).then( (response) => response.text() )
        .then(
            (data) => {
                console.log(data);
                window.alert(data);
            }
        ); 
    }

    function handleClick() {
        // props.setModalOpen(true);
        let review = window.prompt('Please leave a review of your interaction with this therapist, so that other users can learn from your experience:', 'Experience was great.');
        // window.location.reload();
        getReviewSentiment(review);
    }

    // onMouseEnter={setBackgroundColor('red')} onMouseLeave={setBackgroundColor('lightred')}

    return (
        <div className="leave-button" style={{
            visibility: props.visibility, backgroundColor: backgroundColor
        }} onClick={handleClick} onMouseEnter={() => {
            setBackgroundColor('red')}
            } onMouseLeave={() => {
                setBackgroundColor('lightpink')}
                }>
            Leave Call
        </div>
    )
}

export { LeaveButton };