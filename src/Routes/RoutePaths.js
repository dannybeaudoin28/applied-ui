import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddPosting from '../Components/AddPosting'
import Home from '../Components/Home'
import UITable from "../Components/UITable"


export default function RoutePaths({columns, todos}) {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addPosting' element={<AddPosting />} />
                <Route path='/viewPostings' element={<UITable columns={columns} todos={todos} />} />
            </Routes>
        </>
    )
}
