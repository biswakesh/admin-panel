import React from 'react'
import logo from "../asset/logo.png"
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CommentIcon from '@mui/icons-material/Comment';
import Person4Icon from '@mui/icons-material/Person4';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/")
  }
  const handleCategory = () => {
    navigate("/category")
  }
  const handleBooks = () => {
    navigate("/books")
  }
  const handleComment = () => {
    navigate("/comment")
  }
  const handleUser = () => {
    navigate("/user")
  }
  const handleAuthor = () => {
    navigate("/author")
  }
  const handleSetting = () => {
    navigate("/setting")
  }
  return (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
        <div className='logo'>
          <img src={logo} />
        </div>
      </div>
      <ul>
        <li onClick={handleDashboard}>
          <span><DashboardIcon className='icons' /></span>
          <h3>Dashboard</h3>
        </li>
        <li onClick={handleCategory}>
          <span><CategoryIcon className='icons' /></span>
          <h3>Category</h3>
        </li>
        <li onClick={handleBooks}>
          <span><MenuBookIcon className='icons' /></span>
          <h3>Books</h3>
        </li>
        <li onClick={handleComment}>
          <span><CommentIcon className='icons' /></span>
          <h3>Comment</h3>
        </li>
        <li onClick={handleUser}>
          <span><Person4Icon className='icons' /></span>
          <h3>Users</h3>
        </li>
        <li onClick={handleAuthor} >
          <span><AccountBoxIcon className='icons' /></span>
          <h3>Author</h3>
        </li>
        <li onClick={handleSetting}>
          <span><SettingsIcon className='icons' /></span>
          <h3>Settings</h3>
        </li>
      </ul>
    </div>

  )
}

export default Sidebar