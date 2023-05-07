import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import editIcon from '../Assets/edit.png'
import deleteIcon from '../Assets/delete.png'
import ApiCalls from '../Services/PostingService.js'
import { QueryClient, useQuery } from '@tanstack/react-query';


let tempData;
export default function PostingDetails(props) {
    const location = useLocation();
    const data = location.state?.todo;
    const { deletePosting } = ApiCalls();

    function handleDelete(id) {
        deletePosting(id);
    }

    return (
        <>
            <div className='postingDetails'>
                <div>
                    <h1>{data.title}</h1>
                    <hr />
                </div>
                <div className="button-panel">
                    <Link to='/viewPostings'>
                        <button className='btn btn-secondary'>Back</button>
                    </Link>
                    <button data={data} onClick={editPosting}><img src={editIcon} alt='edit' className='button-img' /></button>
                    <Link to='/viewPostings'>
                        <button onClick={() => handleDelete(data.id)}><img src={deleteIcon} alt='delete' className='button-img' /></button>
                    </Link>
                </div>
                <div>
                    <p>Company: {data.company}</p>
                    <p>Job posting: <a href={data.url}>{data.url}</a></p>
                    <p>Description: {data.desc}</p>
                    <p>Application Date: {data.dateApplied}</p>
                    <p>Platform Applied on: {data.platform}</p>
                    <p>Number of Interviews: {data.interviewNo}</p>
                    <p>Technical Assignment: {data.isHadTask.toString()}</p>
                </div>
            </div>
        </>
    )
}

function editPosting() {
    alert('Edit')
    console.log('edit clicked')
}