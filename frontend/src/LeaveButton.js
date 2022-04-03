
import { useState } from 'react'
import { html2canvas } from 'html2canvas';

function LeaveButton(props) {

    const [backgroundColor, setBackgroundColor] = useState('lightpink');

    function getFaceSentiment() {

        var takeScreenShot = function() {
            // clearTimeout(myVar);
            html2canvas(document.getElementById("container"), {
                onrendered: function (canvas) {
                    var tempcanvas=document.createElement('canvas');
                    tempcanvas.width=350;
                    tempcanvas.height=350;
                    var context=tempcanvas.getContext('2d');
                    context.drawImage(canvas,0,0,500,700,0,0,600,800); //set coordinates of where yoou want to capture
                    var link=document.createElement("a");
                    link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
                    link.download = 'screenshot.jpg';
                    link.click();
                }
            });
            // myVar = setTimeout(takeScreenShot, 10000);
        }

        const fileInput = document.querySelector('#your-file-input') ;
        const formData = new FormData();

        formData.append('file', fileInput.files[0]);

        const response = fetch( 'http://127.0.0.1:5000/face_sentiment',
        {
            method: 'POST',
            body: formData,
        } ).then( (response) => response.text() )
        .then(
            (data) => {
                console.log(data);
                window.alert(data);
            }
        ); 
    }

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

        const myTimeout = setTimeout(() => {window.location.reload()}, 5000);
    }

    // onMouseEnter={setBackgroundColor('red')} onMouseLeave={setBackgroundColor('lightred')}

    return (
        <div>
            <div className='face-sentiment'>
            😀
        </div>
        <div className="leave-button" style={{
            visibility: props.visibility, backgroundColor: backgroundColor
        }} onClick={handleClick} onMouseEnter={() => {
            setBackgroundColor('red')}
            } onMouseLeave={() => {
                setBackgroundColor('lightpink')}
                }>
            Leave Call
        </div>
        </div>
        
    )
}

export { LeaveButton };