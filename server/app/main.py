from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
import random

app = FastAPI()

# ✅ CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Home Route
@app.get("/")
def home():
    return {
        "message": "StockVision AI Backend Running"
    }


# ✅ Stock Data Route
@app.get("/stock/{ticker}")
def get_stock_data(ticker: str):

    try:

        stock = yf.Ticker(ticker)

        hist = stock.history(period="7d")

        # No data check
        if hist.empty:
            return {
                "error": "No stock data found"
            }

        data = []

        for index, row in hist.iterrows():

            data.append({
                "date": str(index.date()),
                "price": round(float(row["Close"]), 2)
            })

        return data

    except Exception as e:

        return {
            "error": str(e)
        }


# ✅ AI Prediction Route
@app.get("/predict/{ticker}")
def predict_stock(ticker: str):

    try:

        stock = yf.Ticker(ticker)

        hist = stock.history(period="7d")

        # No data check
        if hist.empty:
            return {
                "error": "No prediction data found"
            }

        last_price = float(hist["Close"].iloc[-1])

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

    except Exception as e:

        return {
            "error": str(e)
        }