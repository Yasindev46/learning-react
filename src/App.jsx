import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchBar from './components/SearchBar'
import Profile from './components/Profile'
import Calc from './components/Calc'
import Home from './components/Home'
import Autosave from './components/Autosave'
import OTP from './components/OTP'
import Attendance from './attendance/Attendance'
import Timer from './components/Timer'
import Fetch from './components/Fetch'
import WikipediaSearch from './components/WikipediaSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/autosave" element={<Autosave />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/wikipedia" element={<WikipediaSearch />} />

      </Routes>
    </Router>
  )
}

export default App
