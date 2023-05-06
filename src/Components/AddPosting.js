import React, { useRef } from 'react';
import axios from "axios";
import '../app.css';

export default function AddPosting() {
    const postingNameRef = useRef();
    const postingCompanyRef = useRef();
    const postingURLRef = useRef();
    const postingDescRef = useRef();
    const postingPlatformRef = useRef();
    const postingInterviewNoRef = useRef();
    const postingHasTechInterviewRef = useRef();


    function handleAddPosting(e) {
        const title = postingNameRef.current.value
        const company = postingCompanyRef.current.value
        const url = postingURLRef.current.value
        const desc = postingDescRef.current.value
        const platform = postingPlatformRef.current.value
        const interviewNo = postingInterviewNoRef.current.value
        const hadTask = postingHasTechInterviewRef.current.value

        axios.post("http://192.168.0.102:8888/api/postings", {
            title: title,
            company: company,
            url: url,
            desc: desc,
            platform: platform,
            interviewNo: interviewNo,
            hadTask: hadTask
        })
        if (title === '' || company === '' || url === ''
            || desc === '' || platform === ''
            || interviewNo === '' || hadTask === '') return;
        postingNameRef.current.value = null;
        postingCompanyRef.current.value = null;
        postingURLRef.current.value = null;
        postingDescRef.current.value = null;
        postingPlatformRef.current.value = null;
        postingInterviewNoRef.current.value = null;
        postingHasTechInterviewRef.current.value = null;
    }

    return (
        <div className='container-custom'>
            <br />
            <h1>Add an application to track</h1>
            <label>Add title of posting: </label>
            <br />
            <input ref={postingNameRef} type="text" className="form-group" />
            <br />
            <label>Company Name: </label>
            <br />
            <input ref={postingCompanyRef} type='text' className='form-group' />
            <br />
            <label>Job URL: </label>
            <br />
            <input ref={postingURLRef} type='text' className='form-group' />
            <br />
            <label>Platform Applied On: </label>
            <br />
            <input ref={postingPlatformRef} type='text' className='form-group' />
            <br />
            <label>Job Description: </label>
            <br />
            <input ref={postingDescRef} type='text' className='form-group' />
            <br />
            <label>Number Of Interviews: </label>
            <br />
            <input ref={postingInterviewNoRef} type='number' className='form-group' />
            <br />
            <label>Technical Assignment: </label>
            <br />
            <input ref={postingHasTechInterviewRef} type='text' className='form-group' />
            <br />
            <button onClick={handleAddPosting} className="btn btn-primary">Add Todo</button>
            <br /><br />
        </div>
    )
}
