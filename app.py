import os
from dotenv import load_dotenv
from flask import Flask, render_template, request, abort
import twilio
from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import VideoGrant
import uuid

load_dotenv()
twilio_account_sid = os.environ.get('TWILIO_ACCOUNT_SID')
twilio_api_key_sid = os.environ.get('TWILIO_API_KEY_SID')
twilio_api_key_secret = os.environ.get('TWILIO_API_KEY_SECRET')

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    username = request.get_json(force=True).get('username')
    if not username:
        abort(401)

    # token = AccessToken(twilio_account_sid, twilio_api_key_sid,
    #                     twilio_api_key_secret, identity=username)
    # token.add_grant(VideoGrant(room='My Room'))

    access_token = twilio.jwt.access_token.AccessToken( twilio_account_sid, twilio_api_key_sid, twilio_api_key_secret, identity=uuid.uuid4().int)
    # create the video grant
    video_grant = twilio.jwt.access_token.grants.VideoGrant(room= "My Room")
    # Add the video grant to the access token
    access_token.add_grant(video_grant)

    return {'token': access_token.to_jwt()}