import cv2
from deepface import DeepFace

def face_sentiment(img): #expects string with image title
    to_analyze = cv2.imread(img)
    analysis = DeepFace.analyze(to_analyze)
    mood = analysis["dominant_emotion"]
    if mood == "angry":
        return "😡"
    elif mood == "disgust":
        return "🤮"
    elif mood == "fear":
        return "😨"
    elif mood == "happy":
        return "😀"
    elif mood == "sad":
        return "😢"
    elif mood == "surprise":
        return "😲"
    else:
        return "😐"

# def review_sentiment(review):
#     return