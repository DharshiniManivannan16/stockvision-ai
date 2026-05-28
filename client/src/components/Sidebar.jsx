import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">

      <h2 className="text-green-400 text-2xl font-bold mb-10">
        Dashboard
      </h2>

      <div className="flex flex-col gap-6 text-lg">

        <Link to="/" className="text-white hover:text-green-400">
          Home
        </Link>

        <Link to="/dashboard" className="text-white hover:text-green-400">
          Dashboard
        </Link>

        <Link to="/prediction" className="text-white hover:text-green-400">
          Prediction
        </Link>

        <Link to="/analytics" className="text-white hover:text-green-400">
          Analytics
        </Link>

      </div>

    </div>
  )
}

export default Sidebar