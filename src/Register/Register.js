import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import "./Register.css"
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const signup = () => {

  }

  return (
    <div className='Register-container'>
      <div className='Register-form-body'>
        <h4>My Library</h4>
        <div style={{ display: 'flex' }}>
          <PersonIcon className='Register-icon' />
          <input type='text' className="box" value={name} placeholder='UserName' onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ display: 'flex' }}>
          <LockIcon className='Register-icon' />
          <input type='mail' className="box" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div style={{ display: 'flex' }}>
          <LockIcon className='Register-icon' />
          <input type='text' className="box" value={phone} placeholder='PhoneNumber' onChange={(e) => setPhone(e.target.value)} />
        </div>
        <input type='submit' className='submit' value="Register" onClick={signup} />

        <div>Already have an account ! <button style={{ borderRadius: "10px", backgroundColor: "gray" }} onClick={() => { navigate("/login") }}>Login </button></div>
      </div>
    </div>
  )
}
export default Register
