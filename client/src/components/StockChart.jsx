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
import API_URL from "../utils/api";
import axios from "axios"

function StockChart() {

  const [stockName, setStockName] = useState("RELIANCE.NS")

  const [search, setSearch] = useState("")

  const [stockData, setStockData] = useState([])

  useEffect(() => {

    fetchStockData()

  }, [stockName])

  const fetchStockData = async () => {

    try {

      const response = await axios.get(
        `${API_URL}/stock/${stockName}`
      )

      const formattedData = response.data.map((item) => ({
        day: item.date,
        price: item.price,
      }))

      setStockData(formattedData)

    } catch (error) {

      console.log(error)

    }

  }

  const handleSearch = () => {

    if (!search) return

    setStockName(search)

    setSearch("")

  }

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[500px]">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-white text-2xl font-bold">
          {stockName} Chart
        </h2>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Search stock..."
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

        <LineChart data={stockData}>

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

export default StockChart