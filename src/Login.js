import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email,password} = formData

  const onChange = (e) => {
    console.log(e.target.value)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  const login = (e) => {
    localStorage.setItem("name", JSON.stringify(email));
    console.log(formData)
    setUser({ [e.target.name]: e.target.value })
    navigate('/')
  }

  return (
    <div className='login-container'>
      <div className='Login-form-body'>
        <h4>My Library</h4>
        <div style={{ display: 'flex' }}> <PersonIcon className='login-icon' />
          <input type='text' className="box" onChange={onChange} name='email' value={email}  placeholder='UserName' />
        </div>
        <div style={{ display: 'flex' }}><LockIcon className='login-icon' />
          <input type='text' className="box" name='password'  placeholder='Password' value={password} onChange={onChange} />
        </div>
        <input type='submit' className='submit' value="Login" onClick={login} />
        <div style={{ margin: "10px" }}>Don't have an account !<button style={{ borderRadius: "10px", backgroundColor: "gray" }} onClick={() => {
          navigate("/register")
        }}>Register</button></div>
      </div>
    </div>
  )
}
export default Login
