
from flask import Flask, render_template, request, Response, make_response

from sentiment_recognition import face_sentiment, review_sentiment

app = Flask(__name__)


@app.route('/face_sentiment', methods=['POST'])
def face_sentiment():

    request.files.get("file").save('./face.jpg')
    data = face_sentiment('./face.jpg')
    # print(data)
    resp = make_response(str(data))
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp
    # return Response( status=200, headers={ "Access-Control-Allow-Origin": "*" } )
    # return 'Hello World!' + str(review)
    # return render_template('index.html')

@app.route('/review', methods=['POST'])
def review():
    review = request.args.get('_review')
    data = 'Hello World!' + str(review)

    data = review_sentiment(str(review))
    # print(data)
    resp = make_response(str(data))
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp
    # return Response( status=200, headers={ "Access-Control-Allow-Origin": "*" } )
    # return 'Hello World!' + str(review)
    # return render_template('index.html')

@app.route('/', methods=['POST'])
def index():
    return 'Index Page'
    # return render_template('index.html')
