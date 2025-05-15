
import LoginPage from './pages/LoginPage'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
