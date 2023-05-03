import React, { useRef } from 'react'
import axios from "axios"

export default function AddPosting({ }) {
    const todoNameRef = useRef()

    function handleAddTodo(e) {
        const title = todoNameRef.current.value
    
        axios.post("http://192.168.0.102:8888/api/postings", {
            title: title,
            complete: false
        }).then(response => console.log(response))
        if (title === '') return
        todoNameRef.current.value = null
    }

    return (
        <div className='container'>
            <input ref={todoNameRef} type="text" className="form-group" />
            <button onClick={handleAddTodo} className="btn btn-primary">Add Todo</button>
        </div>
    )
}
