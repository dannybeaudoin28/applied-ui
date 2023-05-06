import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PostingDetails(props) {
    const location = useLocation();
    const data = location.state?.todo;

    return (
        <div className='postingDetails'>
            <h1>{data.title}</h1>
            <hr/>
            <p>Company: {data.company}</p>
            <p>Job posting: {data.url}</p>
            <p>Description: {data.desc}</p>
            <p>Application Date: {data.dateApplied}</p>
            <p>Platform Applied on: {data.platform}</p>
            <p>Number of Interviews: {data.interviewNo}</p>
            <p>Technical Assignment: {data.hadTask}</p>
        </div>
    )
}
