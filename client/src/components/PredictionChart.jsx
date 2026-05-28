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

function PredictionChart() {

  const [predictionData, setPredictionData] = useState([])

  useEffect(() => {

    fetchPrediction()

  }, [])

  const fetchPrediction = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/predict/RELIANCE.NS"
      )

      setPredictionData(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[450px] mt-10">

      <h2 className="text-white text-2xl font-bold mb-6">
        AI Prediction Chart
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
            stroke="#3b82f6"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )
}

export default PredictionChart