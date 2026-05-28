import { Link } from "react-router-dom"

function Home() {

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-7xl font-bold mb-6">
          StockVision AI
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          AI Powered Stock Market Prediction Platform
        </p>

        <div className="flex gap-6 justify-center">

          <Link
            to="/dashboard"
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-2xl"
          >
            Open Dashboard
          </Link>

          <Link
            to="/prediction"
            className="border border-zinc-700 hover:border-green-400 px-8 py-4 rounded-2xl"
          >
            AI Prediction
          </Link>

        </div>

      </div>

    </div>

  )
}

export default Home