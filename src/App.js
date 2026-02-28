import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import MenuCard from './components/MenuCard'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import BookTable from './components/BookTable'
import ProtectedRoute from './ProtectedRoute/protectedRoute.js'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menucard" element={<MenuCard />} />

        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/home" replace />} />

      
        <Route
          path="/book"
          element={
            <ProtectedRoute>
              <BookTable />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  )
}


export default App
