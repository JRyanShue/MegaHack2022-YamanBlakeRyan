def face_sentiment(img): #expects string with image title

    import cv2
    from deepface import DeepFace

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

def review_sentiment(review): #expects string with review

    #Access Hugging Face BERT API

    import requests

    url = "https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment"
    token = "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"
    headers = {"Authorization": f"Bearer {token}"}

    to_input = {"inputs": review}

    response = requests.post(url, headers = headers, json = to_input)

    output = response.json()

    rating = 0

    for i in range(5):
        rating += output[0][i]["score"] * (i + 1)

    rating *= 20 #turn rating into a score out of 100

    return rating