import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import PredictionChart from "../components/PredictionChart"

function Prediction() {

  return (

    <div className="bg-black min-h-screen">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-white text-4xl font-bold mb-4">
            AI Prediction
          </h1>

          <p className="text-zinc-400 mb-8">
            Predict future stock prices using AI models
          </p>

          <PredictionChart />

        </div>

      </div>

    </div>

  )
}

export default Prediction