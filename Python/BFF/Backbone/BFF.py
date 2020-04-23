from textblob import TextBlob
from flask import Flask, request, jsonify
import json
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
CORS(app)

@app.route("/currencyconverter", methods=['POST'])
def currencyconverter():
	val = request.get_json()
	print(val)
	url ="http://192.168.99.100:8081/currencyconverter"

	headers = {"Content-Type": "application/json"}
	response = requests.post(url, data = json.dumps(val), headers = headers)

	print(response)
	json_resp = json.dumps(response.json())
	return json_resp


@app.route("/historic", methods=['POST'])
def historic():
	val = request.get_json()
	print(val)
	url ="http://192.168.99.100:8083/historic"

	headers = {"Content-Type": "application/json"}
	response = requests.post(url, data = json.dumps(val), headers = headers)

	print(response)
	json_resp = json.dumps(response.json())
	return json_resp

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)