import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom'

function BookView() {

    const params = useParams()
    console.log(params);

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams);

    const [BookData, setBookData] = useState({})


    useEffect(() => {
        loadBook()
    }, [])

    let loadBook = async () => {
        try {
            let Books = await axios.get(`https://62fe35d041165d66bfbb1342.mockapi.io/Books/${params.id}`);
            setBookData(Books.data)
            console.log(Books.data);
        } catch (error) {

        }
    }
  return (
    <>
    <h1>{params.Id}</h1>
    <div className='text-center my-auto'>
        <h2 style={{ color: "Blue" }}> Name : {BookData.name}</h2>
        <h3 style={{ color: "Black" }}>Author : {BookData.author}</h3>
        <h3 style={{ color: "Black" }}>No. of Pages : {BookData.pages}</h3>
    </div>
</>


  )
}

export default BookView