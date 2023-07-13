import React from 'react'
import "./Books.css"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
const Books = () => {
  const [book, setbook] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [filteredList, setFilteredList] = useState(book);

  useEffect(() => {
    fetch(`http://ebook.heyaskme.in//api.php?latest`)
      .then((response) => response.json())
      .then(response => {
        setbook(response.EBOOK_APP);
        setFilteredList(response.EBOOK_APP)
      })
      .catch(err => {
        console.log(err)
      }
      )
  }, [])

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    setSearchText(query)
    // Create copy of item list
    var updatedList = [...book];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => (
      item.book_title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      item.author_name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      item.category_name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    ));
    // Trigger render with updated values
    setFilteredList(updatedList);
  };


  return (
    <div className='book-container'>
      <div className='book-header'>
        <span>Manage Books</span>
        <div className='searchbox-button'>
          <div style={{ marginRight: "230px" }}>
            <input type='text' onChange={filterBySearch} value={searchText} placeholder='Search Here...' style={{ margin: "10px" }} />
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
          {filteredList.map((item, index) => {
            return <tr key={index}>
              <td>{item.category_name}</td>
              <td>{item.author_name}</td>
              <td>{item.book_title}</td>
              <td> <img src={`http://ebook.heyaskme.in/images/thumbs/${item.book_cover_img}`} alt='hello' /></td>
              <td>
                <button style={{ backgroundColor: "blue" }}>See Details</button>
                <button>Read Book</button>
              </td>
            </tr>
          })}
        </Table>
      </div>
    </div>
  )
}

export default Books