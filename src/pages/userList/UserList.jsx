import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData'

export function UserList() {
  	const [data, setData] = useState(userRows)

	const handleDelete = (id) => {
		setData(data.filter(item => item.id !== id))
	}
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params) => (
                <div className="userListImage">
                    <img src={params.row.avatar} alt="userImage" className="userImage" />
                    {params.row.username}
                </div>
            ),
        },
        { field: 'email', headerName: 'E-mail', width: 230 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 190 },
        {
            field: 'action',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <React.Fragment>
                    <Link to={'/user/' + params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                </React.Fragment>
            ),
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
