import React from 'react'
import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody } from "@material-ui/core"



export default function UITable({ columns, todos, toggleTodo }) {
  let localTodo;
  function handleTodoClick() {
    toggleTodo(localTodo.id)
  }

  return (
    <TableContainer component={Paper}>
      <Table className='table'>
        <TableHead className='thead-dark'>
          <TableRow>
            {
              columns.map(col => {
                return (<TableCell scope='col' align='right'>{col.title}</TableCell>)
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map(todo => {
            localTodo = todo
            return (
              <TableRow key={todo.id}>
                <TableCell scope='row' key={todo.id} component='th'>
                  {todo.id}
                </TableCell>
                <TableCell key={todo.title} align='right'>{todo.title}</TableCell>
                <TableCell align='right' key={todo.id}>
                  <input type="checkbox" checked={todo.complete} todo={todo} onChange={handleTodoClick} className='col-sm form-check'></input>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
