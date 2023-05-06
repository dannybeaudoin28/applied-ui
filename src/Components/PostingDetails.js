import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import editIcon from '../Assets/edit.png'
import deleteIcon from '../Assets/delete.png'
import deletePosting from '../Services/PostingService';
import { useQuery } from '@tanstack/react-query';


let tempData;
export default function PostingDetails(props) {
    const location = useLocation();
    const data = location.state?.todo;

    tempData = data;
    // const deletePost = (data) => () => {
    //     console.log(data)
    //     // console.log('clicked delete', data)
    //     // // console.log(data)

    //     const {
    //         data: test
    //     } = useQuery({
    //         queryKey: ["tempData"],
    //         queryFn: deletePosting
    //     });
    //     deletePosting(data);
    // }

    // const HandleClick = () => {
    //     console.log('refetching')
    //     // manually refetch
    //     const { newData } = useQuery(["posting", data.id], () => deletePosting(data.id))
    // };

    // const { refetch } = useQuery({ 
    //     queryKey : ["data"], 
    //     queryFn: deletePosting, 
        
    //     refetchOnWindowFocus: false,
    //     enabled: false // disable this query from automatically running
    // });

    

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
                    <button onClick={deletePosting(data.id)}><img src={deleteIcon} alt='delete' className='button-img' /></button>
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

function DeleteThisPosting() {
    const {
        data: test
    } = useQuery({
        queryKey: ["tempData"],
        queryFn: deletePosting
    });
}

function editPosting() {
    console.log('edit clicked')
}