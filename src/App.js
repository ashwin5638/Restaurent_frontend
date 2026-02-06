import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import MenuCard from './components/MenuCard'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import ProtectedRoute from './ProtectedRoute/protectedRoute.js'
import './App.css'

const App = () => {

  return (
    <Router>
      <Routes>
        {/* Default entry */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/menucard"
          element={
            <ProtectedRoute>
              <MenuCard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  )
}

export default App
