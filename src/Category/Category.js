import React from 'react'
import "./Category.css"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { blue } from '@mui/material/colors';
const Category = () => {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    fetch(`https://ebook.heyaskme.in//api.php?cat_list`)
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
  console.log("data", record);
  return (
    <div className='category-container'>
      <div className='category-header'>
        <span>Manage Categories</span>
        <button>Add Category</button>
      </div>
      <div className='category-tabel'>
        <Table>
          <thead>
            <tr >
              <th className='th1'>Category</th>
              <th className='th2'>Action</th>
            </tr>
          </thead>
          {record.map((item, index) => {
            return <tr key={index}>
              <td className='td1'>{item.category_name}</td>
              <td className='action'>
                <button style={{ backgroundColor: "gray", margin: "10px" }}>Add</button>
                <button>Delet</button></td>
            </tr>
          })}
        </Table>
      </div>
    </div>

  )
}

export default Category