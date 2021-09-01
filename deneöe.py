import requests

url = "https://coinpaprika1.p.rapidapi.com/tickers"

headers = {
    "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
    "x-rapidapi-key": "db67770653msh31c6777c0a81fa2p1797a0jsn411fc826a29b",
}

response = requests.request("GET", url, headers=headers)

print(response.text)
