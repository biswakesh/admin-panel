import React from 'react'
import "./Navbar.css"
import userimage from "../asset/user.png"
import { useNavigate } from 'react-router-dom'
const Navbar = ({setUser}) => {
    const navigate = useNavigate()
    return (
        <div className='top-bar'>
            <div style={{ display: 'flex' }}><span>MY</span><h3>Library</h3></div>
            <div className='user'>
                <button onClick={() => {
                    localStorage.removeItem('name')
                    navigate('/login')
                    setUser('')
                }}>Logout</button>
                <img src={userimage} />
            </div>
        </div>


    )
}

export default Navbar