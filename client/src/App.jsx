import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Prediction from "./pages/Prediction"
import Analytics from "./pages/Analytics"

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-black">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/prediction"
            element={<Prediction />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App