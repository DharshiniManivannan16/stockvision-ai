import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import StockChart from "../components/StockChart"

function Analytics() {

  return (

    <div className="bg-black min-h-screen">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-white text-4xl font-bold mb-4">
            Market Analytics
          </h1>

          <p className="text-zinc-400 mb-8">
            Real-time stock analytics and insights
          </p>

          <StockChart />

          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

              <h2 className="text-zinc-400">
                Market Status
              </h2>

              <p className="text-green-400 text-3xl font-bold mt-4">
                Bullish
              </p>

            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

              <h2 className="text-zinc-400">
                Accuracy
              </h2>

              <p className="text-blue-400 text-3xl font-bold mt-4">
                89%
              </p>

            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

              <h2 className="text-zinc-400">
                AI Confidence
              </h2>

              <p className="text-yellow-400 text-3xl font-bold mt-4">
                High
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Analytics