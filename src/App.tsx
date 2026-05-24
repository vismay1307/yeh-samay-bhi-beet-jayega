
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Timer from './pages/Timer'
import StopWatch from './pages/StopWatch'

function App() {
  return (
      <div className="app-shell">
        <div className="app-glow app-glow-left" />
        <div className="app-glow app-glow-right" />
        <Navbar />
        <main className="relative z-10">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/stopwatch' element={<StopWatch />} />
        </Routes>
        </main>
      </div>
  )
}

export default App
