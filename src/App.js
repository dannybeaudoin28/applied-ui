import React, { useEffect, useState } from "react"
import TodoList from "./TodoList"
import axios from "axios"
import './app.css'
import NavBar from "./Components/NavBar"
import RoutePaths from "./Routes/RoutePaths"
import fetchPostings from './Services/PostingService'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

let init = true

// function GetPostings() {
//     const {
//         status,
//         error,
//         data: todos,
//     } = useQuery({
//         queryKey: ["todos"],
//         queryFn: fetchPostings
//     })
//     if (status === 'loading') return <h1>Loading...</h1>
//     if (status === 'error') return <h2>{JSON.stringify(error)}</h2>
//     return todos
// }


function App() {
    //const queryClient = useQueryClient()

    //const [todos, setTodos] = useState()
    //const { todos, setTodos } = GetPostings();

    const {
        status,
        error,
        data: todos,
    } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchPostings
    })

    console.log('todos is: ', todos)

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

    function handleClearTodos() {
        let newTodos = []
        newTodos = todos.filter(todo => todo.complete)
        newTodos.forEach(d => {
            // axios.delete("http://192.168.0.102:8888/api/postings/" + d.id)
        })
        //setTodos([])
    }

    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                crossOrigin="anonymous"></link>
            <NavBar />
            <RoutePaths columns={columns} todos={todos} />
            {/* <TodoList columns={columns} todos={todos} toggleTodo={toggleTodo} /> */}
            {/* <Table columns={columns} todos={todos} toggleTodo={toggleTodo}></Table> */}
            {/* <UITable columns={columns} todos={todos} toggleTodo={toggleTodo}></UITable>
            <div>{todos.filter(todo => !todo.complete).length} left todo</div>
            <button onClick={handleClearTodos} className="btn btn-secondary">Clear Complete</button> */}
        </>

    )
}

export default App