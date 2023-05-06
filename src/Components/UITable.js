import React from 'react';
import fetchPostings from '../Services/PostingService';
import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody } from "@material-ui/core";
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

export default function UITable() {
  const columns = React.useMemo(
    () => [
      {
        title: 'Title',
        field: 'title'
      },
      {
        title: 'Company',
        field: 'company'
      },
      {
        title: 'Date Applied',
        field: 'dateApplied'
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
      <div className='container-custom'>
        <br />
        <h1>Results</h1>
        <TableContainer component={Paper}>
          <Table className='table'>
            <TableHead className='thead-dark'>
              <TableRow>
                {
                  columns?.map(col => {
                    return (<TableCell scope='col' align='left'>{col.title}</TableCell>)
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
              {todos?.map(todo => {
                return (
                  <TableRow key={todo.id}>
                    <TableCell scope='row' key={todo.id} component='th'>
                      <Link to='/viewPosting' state={{ todo: todo }}>{todo.title}</Link>
                    </TableCell>
                    <TableCell key={todo.company} align='left'>{todo.company}</TableCell>
                    <TableCell key={todo.dateApplied} align='left'>{todo.dateApplied}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </div>
    </>
  );
}
