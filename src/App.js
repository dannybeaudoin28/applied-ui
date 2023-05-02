import React, { useState, useRef, useEffect, useMemo } from "react"
import TodoList from "./TodoList"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"
import './app.css'
import Table from "./Table"
import useTable from 'react-table'
import MaterialReactTable from 'material-react-table'

const LOCAL_STORAGE_KEY = 'todoApp.todos'
const BAD_REQ_ERR = 'ERR_BAD_REQUES'

let init = true

const client = axios.create({
    baseURL: "http://192.168.0.102:8888/api/postings"
})

function App() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    const columns = React.useMemo(
        () => [
            {
                header: 'ID',
                accessorKey: 'id',
            },
            {
                header: 'title',
                accessorKey: 'title',
            },
            {
                header: 'complete',
                accessorKey: 'complete'
            }
        ]
    )

    while (init) {
        init = false
        getPosts()
    }

    // useEffect(() => {
    //     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //     if (storedTodos) setTodos(storedTodos)
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    // }, [todos])

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
        //setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const title = todoNameRef.current.value

        axios.post("http://192.168.0.102:8888/api/postings", {
            title: title,
            complete: false
        }).then(response => console.log(response))
        if (title === '') return
        // setTodos(prevTodos => {
        //     return [...prevTodos, { id: uuidv4(), title: title, complete: false }]
        // })
        todoNameRef.current.value = null
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
            return <MaterialReactTable
                title="Posting"
                data={todos}
                columns={columns}></MaterialReactTable>
            {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                crossOrigin="anonymous"></link>
            <h1 className="jumbotron bg-primary">Reminders</h1>
            <input ref={todoNameRef} type="text" className="form-group"/>
            <button onClick={handleAddTodo} className="btn btn-primary">Add Todo</button>
            <button onClick={handleClearTodos} className="btn btn-secondary">Clear Complete</button>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <div>{todos.filter(todo => !todo.complete).length} left todo</div> */}
        </>
    )
}

export default App