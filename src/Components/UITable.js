import React from 'react';
import fetchPostings from '../Services/PostingService';
import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody } from "@material-ui/core";
import { useQuery } from '@tanstack/react-query';

export default function UITable() {
  const columns = React.useMemo(
    () => [
      {
        title: 'ID',
        field: 'id'
      },
      {
        title: 'title',
        field: 'title'
      }
    ]
  );

  const {
    data: todos
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchPostings
  });

  return (
    <>
      <br />
      <h1>Results</h1>
      <TableContainer component={Paper}>
        <Table className='table'>
          <TableHead className='thead-dark'>
            <TableRow>
              {
                columns?.map(col => {
                  return (<TableCell scope='col' align='right'>{col.title}</TableCell>)
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.map(todo => {
              return (
                <TableRow key={todo.id}>
                  <TableCell scope='row' key={todo.id} component='th'>
                    {todo.id}
                  </TableCell>
                  <TableCell key={todo.title} align='right'>{todo.title}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
