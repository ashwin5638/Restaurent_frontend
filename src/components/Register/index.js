import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'


const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const navigate = useNavigate()


  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('https://restaurent-backend-1-3fc8.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          number,
          password
        })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Registration failed')
        return
      }


      navigate('/login')

    } catch (e) {
      setError('Something went wrong')
    }
  }


  const handleUsername = (event) => {
    setUsername(event.target.value)
  }


  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleNumber = (event) => {
    setNumber(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className='container1'>
      <form onSubmit={handleRegister} className='regist-container'>

        <h2 className='head-login'>Create Account</h2>

        <input
          type="text"
          placeholder='Username'
          className='input1'
          onChange={handleUsername}
          required
        />
        <input
          type="email"
          placeholder='Email'
          className='input1'
          onChange={handleEmail}
          required
        />
        {/* Changed type to password for security */}
        <input
          type="password"
          placeholder='Password'
          className='input1'
          onChange={handlePassword}
          required
        />
        <input
          type="tel"
          placeholder='Phone Number'
          className='input1'
          onChange={handleNumber}
        />

        <button className='button' type="submit">Sign Up</button>

        {error && <p className='para1'>{error}</p>}
      </form>
    </div>
  )



}

export default Register
