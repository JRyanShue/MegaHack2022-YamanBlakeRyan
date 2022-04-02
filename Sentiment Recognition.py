import cv2
from deepface import DeepFace

def face_sentiment(img): #expects string with image title
    to_analyze = cv2.imread(img)
    analysis = DeepFace.analyze(to_analyze)
    mood = analysis["dominant_emotion"]
    return mood
