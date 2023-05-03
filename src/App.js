import React, { useState } from "react"
import TodoList from "./TodoList"
import axios from "axios"
import './app.css'
import UITable from "./Components/UITable"
import NavBar from "./Components/NavBar"
import { Routes, Route } from 'react-router-dom';
import AddPosting from './Components/AddPosting'
import Home from './Components/Home'


const LOCAL_STORAGE_KEY = 'todoApp.todos'
const BAD_REQ_ERR = 'ERR_BAD_REQUES'

let init = true

function App() {
    const [todos, setTodos] = useState([])

    let todo = {}

    const columns = React.useMemo(
        () => [
            {
                title: 'ID',
                field: 'id'
            },
            {
                title: 'title',
                field: 'title'
            },
            {
                title: 'complete',
                field: 'complete'
            }
        ]
    )

    while (init) {
        init = false
        getPosts()
    }

    function getPosts() {
        axios.get("http://192.168.0.102:8888/api/postings").then((response) => {
            setTodos(response.data)
        }).catch(error => {
            if (error.code === BAD_REQ_ERR) {
                console.error(error)
            }
        })
    }

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
    }

    function handleClearTodos() {
        let newTodos = []
        newTodos = todos.filter(todo => todo.complete)
        newTodos.forEach(d => {
            axios.delete("http://192.168.0.102:8888/api/postings/" + d.id)
        })
        setTodos([])
    }

    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                crossOrigin="anonymous"></link>
            <NavBar />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/addPosting' element={<AddPosting />} />
                <Route path='/viewPostings' element={<UITable  columns={columns} todos={todos} toggleTodo={toggleTodo} />} />
            </Routes>
            <TodoList columns={columns} todos={todos} toggleTodo={toggleTodo} />
            {/* <Table columns={columns} todos={todos} toggleTodo={toggleTodo}></Table> */}
            {/* <UITable columns={columns} todos={todos} toggleTodo={toggleTodo}></UITable>
            <div>{todos.filter(todo => !todo.complete).length} left todo</div>
            <button onClick={handleClearTodos} className="btn btn-secondary">Clear Complete</button> */}
        </>

    )
}

export default App