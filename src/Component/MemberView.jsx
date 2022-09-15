import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom'

function MemberView() {

    const params = useParams()
    console.log(params);

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams);

    const [MemberData, setMemberData] = useState({})


    useEffect(() => {
        loadMember()
    }, [])

    let loadMember = async () => {
        try {
            let Members = await axios.get(`https://62fe35d041165d66bfbb1342.mockapi.io/Teachers/${params.id}`);
            setMemberData(Members.data)
            console.log(Members.data);
        } catch (error) {

        }
    }
    return (
        <>
            <h1>{params.Id}</h1>
            <div className='text-center my-auto'>
                <h2 style={{ color: "Blue" }}> Name : {MemberData.name}</h2>
                <h3 style={{ color: "Black" }}> Gender : {MemberData.gender}</h3>
                <h3 style={{ color: "Black" }}> Phone Number : {MemberData.phone}</h3>
                <h3 style={{ color: "Black" }}> Email : {MemberData.email}</h3>
            </div>
        </>


    )
}

export default MemberView