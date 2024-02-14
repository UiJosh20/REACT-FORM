import { useState } from 'react'
import Tenary from './Components/Assignment'
import Signik from './Components/Signik'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import FileUpload from './Components/FileUpload'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Tenary/>} />
      <Route path="/signup" element={<Signik/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/upload" element={<FileUpload/>} />
    </Routes>
    </>
  )
}

export default App
