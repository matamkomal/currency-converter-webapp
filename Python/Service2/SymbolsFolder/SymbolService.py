from textblob import TextBlob
from flask import Flask, request, jsonify
import json
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
CORS(app)


@app.route("/symbols", methods=['GET'])
def currencyconverter():
    response = requests.get(
        url="http://data.fixer.io/api/symbols?access_key=3da6cb2c3b9dd542ecd9f3bd7dbbe8e8"
    )

    d = {"response":response.json()}
    json_resp = json.dumps(d)
    return json_resp


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8086, debug=True)

