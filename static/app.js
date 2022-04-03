const usernameInput = document.getElementById('username');
const button = document.getElementById('join_leave');
const container = document.getElementById('container');
const count = document.getElementById('count');
let connected = false;
let room;

const addLocalVideo = async () => {
    const track = await Twilio.Video.createLocalVideoTrack();
    const video = document.getElementById('local').firstElementChild;
    video.appendChild(track.attach());
};

const connectButtonHandler = async (event) => {
    event.preventDefault();
    if (!connected) {
        const username = usernameInput.value;
        if (!username) {
            alert('Enter your name before connecting');
            return;
        }
        button.disabled = true;
        button.innerHTML = 'Connecting...';
        try {
            await connect(username);
            button.innerHTML = 'Leave call';
            button.disabled = false;
        }
        catch {
            alert('Connection failed. Is the backend running?');
            button.innerHTML = 'Join call';
            button.disabled = false;
        }
    }
    else {
        disconnect();
        button.innerHTML = 'Join call';
        connected = false;
    }
};

const connect = async (username) => {
    // console.log('1')
    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'username': username }),
    });
    const data = await response.json();  // Access token
    // console.log(data)
    // console.log('connect method:', Twilio.Video.connect)
    console.log('token:', data.token)
    await Twilio.Video.connect(data.token).then(function (room) {
        console.log('Successfully joined a Room: ', room);
    }, function (error) {
        console.error('Unable to connect to Room: ' + error.message);
    });
    // room = await Twilio.Video.connect(data.token, { room: "My Room" }); //Adds person to the video room.
    // room = await Twilio.Video.connect('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiI8U0syYjY0MTg1YzA4NTdkMmJlY2MwMzFhNDkwMDc5NDczMj4tMTY0ODkzNjAyNCIsImdyYW50cyI6eyJ2aWRlbyI6eyJyb29tIjoiTXkgUm9vbSJ9LCJpZGVudGl0eSI6MTk0MjE4MDE1NTQwODc3MjQzNDc1MjQ4OTExNzU0NDQzOTk0NDY4fSwiaXNzIjoiPFNLMmI2NDE4NWMwODU3ZDJiZWNjMDMxYTQ5MDA3OTQ3MzI-IiwiZXhwIjoxNjQ4OTM5NjI0LCJuYmYiOjE2NDg5MzYwMjQsInN1YiI6IjxBQzg0MTM0ZmE4ZTg3Zjc1ZmE3OThhZjM2MDlkOTNkOWJmPiJ9._rjt3ulYfsBAJl5ED59ucAMy2vV5c1Hzl2MmP-jyZp0')
    console.log('room:', room)
    room.participants.forEach(participantConnected);
    room.on('participantConnected', participantConnected);
    room.on('participantDisconnected', participantDisconnected);
    connected = true;
    updateParticipantCount();
};

const updateParticipantCount = () => {
    if (!connected) {
        count.innerHTML = 'Disconnected.';
    }
    else {
        count.innerHTML = (room.participants.size + 1) + ' participants online.';
    }
};

const participantConnected = (participant) => {
    const participantDiv = document.createElement('div');
    participantDiv.setAttribute('id', participant.sid);
    participantDiv.setAttribute('class', 'participant');

    const tracksDiv = document.createElement('div');
    participantDiv.appendChild(tracksDiv);

    const labelDiv = document.createElement('div');
    labelDiv.innerHTML = participant.identity;
    participantDiv.appendChild(labelDiv);

    container.appendChild(participantDiv);

    participant.tracks.forEach(publication => {
        if (publication.isSubscribed) {
            trackSubscribed(tracksDiv, publication.track);
        }
    });
    participant.on('trackSubscribed', track => trackSubscribed(tracksDiv, track));
    participant.on('trackUnsubscribed', trackUnsubscribed);
    updateParticipantCount();
};

const participantDisconnected = (participant) => {
    document.getElementById(participant.sid).remove();
    updateParticipantCount();
};

const trackSubscribed = (div, track) => {
    div.appendChild(track.attach());
};

const trackUnsubscribed = (track) => {
    track.detach().forEach(element => element.remove());
};

addLocalVideo();
button.addEventListener('click', connectButtonHandler);