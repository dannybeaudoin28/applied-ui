import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddPosting from '../Components/AddPosting';
import Home from '../Components/Home';
import UITable from "../Components/UITable";
import PostingDetails from '../Components/PostingDetails';


export default function RoutePaths() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/addPosting' element={<AddPosting />} />
                <Route path='/viewPostings' element={<UITable />} />
                <Route path='/viewPosting' element={<PostingDetails />}  />
            </Routes>
        </>
    );
}
