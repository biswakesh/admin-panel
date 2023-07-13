import React from 'react'
import "./Books.css"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const Books = () => {
     const [book, setbook] = useState([]);
    useEffect(() => {
      fetch(`http://ebook.heyaskme.in//api.php?latest`)
        .then((response) => response.json())
        .then(response => {
         
          setbook(response.EBOOK_APP);
        })
        .catch(err =>
          {
            console.log(err)} 
            )
    }, [])
    return (
    <div className='book-container'>
     <div className='book-header'>
      <span>Manage Books</span>
      <div className='searchbox-button'>
        <div style={{marginRight:"230px"}}><input type='text'placeholder='Search Here...' style={{margin:"10px"}}/>
        {/* <SearchRoundedIcon style={{position:'absolute',}}/> */}
        
        </div>
        <button> Add Books</button>
      </div>
      </div>
      <div className='book-table'>
      <Table >
            <thead>
              <tr >
                <th >Category</th>
                <th>Author</th>
                <th>Title</th>
                <th>Book Image</th>
                <th>Action</th>
              </tr>
            </thead>
            {book.map((item, index)=>{
      return <tr key={index}>
        <td>{item.category_name}</td>
        <td>{item.book_url}</td>
        <td>{item.book_title}</td>
        <td> <img src={item.book_cover_img}/></td>
        <td>
          <button style={{backgroundColor:"blue"}}>Edit</button>
        <button>Delet</button>
        </td>
          </tr>})}
            </Table>   
      </div>
       </div>
  )
}

export default Books