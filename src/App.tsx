import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import System from './pages/System'
import NotePad from './pages/NotePad'
import MyCase from './pages/MyCase'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mycase" element={<MyCase />} />
          <Route path="/notepad" element={<NotePad />} />
          <Route path="/system" element={<System />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
