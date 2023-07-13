import React from 'react'
import "./Author.css"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import { blue } from '@mui/material/colors';
const Author = () => {
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    fetch(`http://ebook.heyaskme.in//api.php?author_list`)
      .then((response) => response.json())
      .then(response => {

        setAuthor(response.EBOOK_APP);
      })
      .catch(err => {
        console.log(err)
      }
      )
  }, [])
  return (
    <div className='author-container'>
      <div className='author-header'>
        <span>Manage Authors</span>
        <div className='searchbox-button'>
          <div>
            <input type='text' /><SearchRoundedIcon style={{ position: 'relative', marginLeft: "180px" }} />
          </div>
          <button> Add Authors</button>
        </div>
      </div>
      <div className='author-table'>
        <Table >
          <thead>
            <tr style={{ border: "1px solid grey" }} >
              <th >Author</th>
              <th>Author image</th>
              <th>Action</th>
            </tr>
          </thead>
          {author.map((item, index) => {
            return <tr key={index}>
              <td>{item.author_name}</td>
              <td><img src={item.author_image} /></td>
              <td style={{ textAlign: 'center' }}>
                <button style={{ backgroundColor: "blue" }}>Edit</button>
                <button>Delet</button>
              </td>
            </tr>
          })}
        </Table>
      </div>

    </div>
  )
}

export default Author