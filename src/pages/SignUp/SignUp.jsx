import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import api from '../../services/api'
import './SignUp.css'

export default function SignUp(){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!email || !name) return setMsg('Name and Email are required')
    try{
      setLoading(true)
      await api.register(email, name)
      localStorage.setItem('qs_email', email)
      navigate(from)
    }catch(err){
      setMsg(err.message || 'Sign up failed')
    }finally{
      setLoading(false)
    }
  }

  const onGoogle = async () => {
    // Placeholder: In real app, integrate Google Identity Services and then call api.login
    setMsg('Google sign-in is a placeholder. Configure VITE_GOOGLE_CLIENT_ID to enable.')
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={onSubmit}>
        <h2>Create account</h2>
        {msg && <div className="msg">{msg}</div>}
        <label>Name</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Your name" />
        <label>Email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="you@example.com" />
        <button type="submit" disabled={loading}>{loading? 'Creating...':'Create Account'}</button>
        <button type="button" onClick={onGoogle}>Continue with Google</button>
        <div className="muted">Already have an account? <Link to="/login">Sign in</Link></div>
      </form>
    </div>
  )
}

