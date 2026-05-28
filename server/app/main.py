from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
import random

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "StockVision AI Backend Running"
    }

@app.get("/stock/{ticker}")
def get_stock_data(ticker: str):

    stock = yf.Ticker(ticker)

    hist = stock.history(period="7d")

    data = []

    for index, row in hist.iterrows():

        data.append({
            "date": str(index.date()),
            "price": round(row["Close"], 2)
        })

    return data


# 🔥 ADD THIS BELOW
@app.get("/predict/{ticker}")
def predict_stock(ticker: str):

    stock = yf.Ticker(ticker)

    hist = stock.history(period="7d")

    last_price = hist["Close"].iloc[-1]

    predictions = []

    for i in range(1, 8):

        predicted_price = round(
            last_price + random.uniform(-20, 20),
            2
        )

        predictions.append({
            "day": f"Day {i}",
            "price": predicted_price
        })

        last_price = predicted_price

    return predictions