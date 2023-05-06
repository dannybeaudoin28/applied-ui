import React, { useRef } from 'react'
import axios from "axios"
import '../app.css'

export default function AddPosting({ }) {
    const todoNameRef = useRef()

    function handleAddTodo(e) {
        const title = todoNameRef.current.value
    
        axios.post("http://192.168.0.102:8888/api/postings", {
            title: title,
            complete: false
        })
        if (title === '') return
        todoNameRef.current.value = null
    }

    return (
        <div className='container'>
            <br />
            <h1>Add an application to track:</h1>
            <label>Add title of posting: </label>
            <br />
            <input ref={todoNameRef} type="text" className="form-group" />
            <button onClick={handleAddTodo} className="btn btn-primary">Add Todo</button>
        </div>
    )
}
