import os
import json
import requests
# Load environment variables from .env file
# Load the variables into the environment

def lambda_handler(event, context):

    api_key = os.environ['key']  # Get API_KEY from the environment
    host=os.environ['host']
    queried_city=event['city']
    url=f"https://open-weather13.p.rapidapi.com/city/{queried_city}/EN"
    headers = {
	"X-RapidAPI-Key": api_key,
	"X-RapidAPI-Host": host
    }
    if(queried_city is None):
        return{
        "statusCode":404,
        "message":"city Not Found"
        }
    response = requests.get(url, headers=headers)
    print(response.json())
    return{
        "statusCode":200,
        "body":json.dumps({
           "weather": response.json()
        })
    }

