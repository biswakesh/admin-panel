import React from 'react'
import "./User.css"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
const User = () => {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    fetch(`http://ebook.heyaskme.in//user_profile_api.php?id=2`)
      .then((response) => response.json())
      .then(response => {
        console.log("this is response", response);
        setRecord(response.EBOOK_APP);
      })
      .catch(err => {
        console.log(err)
      }
      )
  }, [])
  return (
    <div className='user-container'>
      <div className='user-header'>
        <span>Manage Users</span>
        <div className='searchbox-button'>
          <div style={{ marginRight: "180px" }}>
            <input type='text' /><SearchRoundedIcon style={{ position: 'relative', margin: 10 }} />
          </div>
          <button> Add Users</button>
        </div>
      </div>
      <Table>
        <thead>
          <tr >
            <th >Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        {record.map((item, index) => {
          return <tr key={index}>
            <td >{item.name}</td>
            <td >{item.email}</td>
            <td >{item.phone}</td>
            <td className='action'>
              <button style={{ backgroundColor: "gray", margin: "10px" }}>Add</button>
              <button>Delet</button></td>
          </tr>
        })}
      </Table>
    </div>
  )
}

export default User