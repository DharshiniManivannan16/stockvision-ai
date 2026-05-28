import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Prediction from "./pages/Prediction"
import Analytics from "./pages/Analytics"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-black">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/prediction" 
            element={<Prediction />} 
          />

          <Route 
            path="/analytics" 
            element={<Analytics />} 
          />

          <Route 
            path="/login" 
            element={<Login />} 
          />

          <Route 
            path="/signup" 
            element={<Signup />} 
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App