import React, { useRef } from 'react';
import axios from "axios";
import '../app.css';

export default function AddPosting() {
    const postingNameRef = useRef();
    const postingCompanyRef = useRef();

    function handleAddPosting(e) {
        const title = postingNameRef.current.value
        const company = postingCompanyRef.current.value
        axios.post("http://192.168.0.102:8888/api/postings", {
            title: title,
            company: company
        })
        if (title === '' || company === '') return;
        postingNameRef.current.value = null;
        postingCompanyRef.current.value = null;
    }

    return (
        <div className='container'>
            <br />
            <h1>Add an application to track:</h1>
            <label>Add title of posting: </label>
            <br />
            <input ref={postingNameRef} type="text" className="form-group" />
            <br />
            <label>Company Name: </label>
            <br />
            <input ref={postingCompanyRef} type='text' className='form-group' />
            <br />
            <button onClick={handleAddPosting} className="btn btn-primary">Add Todo</button>
        </div>
    )
}
