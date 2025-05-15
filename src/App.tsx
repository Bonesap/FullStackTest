
import LoginPage from './pages/LoginPage'
import { Navigate, Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import DashboardPage from './pages/DashboardPage'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
