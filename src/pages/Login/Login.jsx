import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import api from '../../services/api'
import './Login.css'

export default function Login(){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!email) return setMsg('Email is required')
    try{
      setLoading(true)
      await api.login(email, name)
      localStorage.setItem('qs_email', email)
      navigate(from)
    }catch(err){
      setMsg(err.message || 'Login failed')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={onSubmit}>
        <h2>Login</h2>
        {msg && <div className="msg">{msg}</div>}
        <label>Email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="you@example.com" />
        <label>Name <span className="muted">(optional)</span></label>
        <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Your name" />
        <button type="submit" disabled={loading}>{loading? 'Signing in...':'Sign In'}</button>
      </form>
    </div>
  )
}

