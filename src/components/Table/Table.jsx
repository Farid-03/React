import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Button from '@mui/material/Button';
import { useRef } from 'react';

function TableSet(props) {
    function deleteFromAPI(e) {
        let idForDel = e.target.getAttribute('my_key');
        axios.delete(`https://northwind.vercel.app/api/suppliers/${idForDel}`)
            .then(() => {
                window.location.reload();
            })
    }

    return (
        <TableContainer style={{ width: 'calc(100% - 240px)', position: 'absolute', right: 0 }} component={Paper}>
            <Table sx={{ marginTop: 0 }} size="large" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Company</TableCell>
                        <TableCell align="left">Contact</TableCell>
                        <TableCell align="left">Country</TableCell>
                        <TableCell align="left">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.apiData && props.apiData.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">{row.companyName}</TableCell>
                            <TableCell align="left">{row.contactName}</TableCell>
                            <TableCell align="left">{row.address?.country}</TableCell>
                            <TableCell align="left">
                                <Button onClick={deleteFromAPI} my_key={row.id} variant="outlined">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableSet