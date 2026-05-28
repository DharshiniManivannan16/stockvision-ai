import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import StockChart from "../components/StockChart"
import PredictionChart from "../components/PredictionChart"
import Watchlist from "../components/Watchlist"
import StockNews from "../components/StockNews"

function Dashboard() {

  return (

    <div className="bg-black min-h-screen">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-white text-4xl font-bold mb-8">
            Dashboard
          </h1>

          <StockChart />

          <PredictionChart />

          <Watchlist />

          <StockNews />

        </div>

      </div>

    </div>

  )
}

export default Dashboard