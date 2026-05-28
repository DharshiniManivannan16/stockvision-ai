import { useState } from "react"
import { signup } from "../services/authService"

function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {

    try {

      await signup(email, password)

      alert("Account Created 🚀")

    } catch (error) {

      alert(error.message)

    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-2xl w-[400px]">

        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          Signup
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
          onClick={handleSignup}
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 rounded-xl"
        >
          Create Account
        </button>

      </div>

    </div>

  )
}

export default Signup