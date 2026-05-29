import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

import { useEffect, useState } from "react"
import axios from "axios"
import API_URL from "../utils/api"

function PredictionChart() {

  const [predictionData, setPredictionData] = useState([])

  useEffect(() => {

    fetchPrediction()

  }, [])

  const fetchPrediction = async () => {

    try {

      const response = await axios.get(
        `${API_URL}/predict/RELIANCE.NS`
      )

      setPredictionData(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[500px]">

      <h2 className="text-white text-2xl font-bold mb-6">
        AI Prediction
      </h2>

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

  )
}

export default PredictionChart