
import LoginPage from './pages/LoginPage'
import { Navigate, Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import DashboardPage from './pages/DashboardPage'
import { ROUTES } from './constants/Routes'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.ANY} element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
