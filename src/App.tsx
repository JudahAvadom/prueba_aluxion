import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Home />
      </div>
    </div>
  )
}

export default App
