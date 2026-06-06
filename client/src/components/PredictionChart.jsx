import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../utils/api";

function PredictionChart() {
  const [stockName, setStockName] = useState("RELIANCE.NS");
  const [search, setSearch] = useState("");
  const [predictionData, setPredictionData] = useState([]);

  useEffect(() => {
    fetchPrediction();
  }, [stockName]);

  const fetchPrediction = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/predict/${stockName}`
      );

      console.log("Prediction Data:", response.data);

      if (Array.isArray(response.data)) {
        setPredictionData(response.data);
      } else {
        setPredictionData([]);
        console.log("API Error:", response.data);
      }

    } catch (error) {
      console.log("Prediction Error:", error);
      setPredictionData([]);
    }
  };

  const handleSearch = () => {
    if (!search.trim()) return;

    setStockName(search.toUpperCase());
    setSearch("");
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[500px]">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-white text-2xl font-bold">
          {stockName} Prediction
        </h2>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="INFY.NS"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-zinc-800 text-white px-4 py-2 rounded-xl outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-5 rounded-xl"
          >
            Search
          </button>

        </div>

      </div>

      <ResponsiveContainer width="100%" height="80%">

        <LineChart data={predictionData}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#27272a"
          />

          <XAxis
            dataKey="day"
            stroke="#a1a1aa"
          />

          <YAxis
            stroke="#a1a1aa"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#22c55e"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PredictionChart;