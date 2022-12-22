import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios'

function Blunk() {
    const [company, setCompany] = useState('');
    const [contact, setContact] = useState('');
    const [country, setCountry] = useState('');

    function handleComapny(e) {
        setCompany(e.target.value);
    }
    function handleContact(e) {
        setContact(e.target.value);
    }
    function handleCountry(e) {
        setCountry(e.target.value);
    }

    function submitApi() {
        axios.post('https://northwind.vercel.app/api/suppliers', {
            companyName: company,
            contactName: contact,
            address: {
                country: country
            }
        })
            .then(() => {
                setCompany('')
                setContact('')
                setCountry('')
            })
    }

    return (
        <div>
            <input value={company} type='text' onChange={handleComapny} id="standard-basic"/>
            <input value={contact} type='text' onChange={handleContact} id="standard-basic2" />
            <input value={country} type='text' onChange={handleCountry} id="standard-basic3" />
            <Button onClick={submitApi}>Add</Button>
        </div>
    )
}

export default Blunk;