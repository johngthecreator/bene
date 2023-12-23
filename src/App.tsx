import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Tasks from './pages/Tasks'
import Profile from './pages/Profile'
import Schedule from './pages/Schedule'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Schedule />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/system" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
