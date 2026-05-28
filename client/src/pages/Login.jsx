import { useState } from "react"
import { login, googleLogin } from "../services/authService"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {

    try {

      await login(email, password)
      
      navigate("/dashboard")

    } catch (error) {

      alert(error.message)

    }

  }

  const handleGoogleLogin = async () => {

    try {

      await googleLogin()

      navigate("/dashboard")

    } catch (error) {

      alert(error.message)

    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-2xl w-[400px]">

        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full bg-zinc-800 text-white p-4 rounded-xl mb-5 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full bg-zinc-800 text-white p-4 rounded-xl mb-5 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 rounded-xl"
        >
          Login
        </button>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black font-bold py-4 rounded-xl mt-4"
        >
          Continue with Google
        </button>

      </div>

    </div>

  )
}

export default Login