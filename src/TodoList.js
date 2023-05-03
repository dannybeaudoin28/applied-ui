import React from 'react'
import Todo from './Todo'
import { Table } from '@material-ui/core'

export default function TodoList({columns, todos, toggleTodo}) {
  return (
    todos.map(todo => {
        // return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        return <Table columns={columns} todos={todos} todo={todo} toggleTodo={toggleTodo}></Table>
    })
  )
}
