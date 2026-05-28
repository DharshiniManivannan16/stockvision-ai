import { getAuth, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function Navbar() {

  const auth = getAuth()
  const navigate = useNavigate()

  const user = auth.currentUser

  const handleLogout = async () => {

    await signOut(auth)
    navigate("/login")

  }

  return (

    <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex justify-between items-center">

      <h1 className="text-white text-xl font-bold">
        StockVision AI
      </h1>

      <div className="flex items-center gap-4">

        {user && (
          <span className="text-zinc-300 text-sm">
            {user.email}
          </span>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          Logout
        </button>

      </div>

    </div>

  )
}

export default Navbar