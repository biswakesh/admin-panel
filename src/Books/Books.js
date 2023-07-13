import React from "react";
import "./Books.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import CustomModal from "../Modal/CustomModal";
import { Button } from "@mui/material";
const Books = () => {
  const [book, setbook] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [filteredList, setFilteredList] = useState(book);
  const [open,setOpen] = useState(false)
  const [bookDetails,setBookDetails] = useState(null)
  useEffect(() => {
    fetch(`http://ebook.heyaskme.in//api.php?latest`)
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setbook(data.EBOOK_APP);
        setFilteredList(data.EBOOK_APP)
      })
      .catch(err => {
        console.log(err)
      }
      )
  }, [])
  const handleOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }


  const handleSeeBookDetail = async (id) => {
    try {
      const response = await fetch(`http://ebook.heyaskme.in//api.php?book_id=${id}`);
      const data = await response.json()
      setBookDetails(data['EBOOK_APP'][0]);
      handleOpen();
    } catch (error) {
      console.error(error);
    }
  };
  



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
      <div className="book-table">
        <Table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Author</th>
              <th>Title</th>
              <th>Book Image</th>
              <th>Action</th>
            </tr>
          </thead>
          {filteredList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.category_name}</td>
                <td>{item.author_name}</td>
                <td>{item.book_title}</td>
                <td>
                  {" "}
                  <img
                    src={`http://ebook.heyaskme.in/images/thumbs/${item.book_cover_img}`}
                    alt="hello"
                  />
                </td>
                <td>
                  <button style={{ backgroundColor: "blue" }} onClick={() => handleSeeBookDetail(item.id)}>
                    See Details
                  </button>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
      {bookDetails && 
      <CustomModal open={open} handleClose={handleClose}>
      <img
                    src={`http://ebook.heyaskme.in/images/thumbs/${bookDetails.book_cover_img}`}
                    alt="hello"
                    />
        <div>Title: {bookDetails.book_title}</div>
        <div>Description: {bookDetails.book_description}</div>
        <div>Author: {bookDetails.author_name}</div>
        <div>Category: {bookDetails.category_name}</div>
        <Button onClick={() => {window.open(bookDetails.book_file_url, '_blank')}} size="large">Read Book</Button>
        <div></div>
      </CustomModal>
                  }
    </div>
  );
};

export default Books;
