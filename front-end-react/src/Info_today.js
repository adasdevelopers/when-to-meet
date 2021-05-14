import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from '@material-ui/core/TextField'

export default function Info_today() {
  const [formats, setFormats] = React.useState(() => ['ch']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <div>
            <h1><font size = "6"> <center><b>Add Availability for NameOfEvent</b></center></font></h1>
            <h3 style={{marginTop: 30, marginLeft: 30}}  size = "100" align="center">Add your contact information</h3>
            <p align="center"><b><u>Name</u></b></p>
            <TextField class='center' size = 'small' id="outlined-basic" variant="outlined" align="center" />
            <p align="center"><b><u>Email</u></b></p>
            <TextField class='center' size = 'small' id="outlined-basic" variant="outlined" align="center" />
            <h3 style={{marginTop: 30, marginLeft: 30}}  size = "100" align="center">Select the time(s) you are available</h3>
            
    <ToggleButtonGroup class='center' value={formats} orientation='horizontal' onChange={handleFormat} aria-label="text formatting" >
      <ToggleButton value="check" >
      <CheckIcon />
      </ToggleButton>
      <ToggleButton value="check" aria-label="ch">
      <CheckIcon />
      </ToggleButton>
      <ToggleButton value="check" aria-label="bold">
      <CheckIcon />
      </ToggleButton>
      <ToggleButton value="check" aria-label="bold">
      <CheckIcon />
      </ToggleButton>
      <ToggleButton value="check" aria-label="bold">
      <CheckIcon />
      </ToggleButton>
      <ToggleButton value="check"  aria-label="bold">
      <CheckIcon />
      </ToggleButton>
      <ToggleButton value="check" aria-label="bold">
      <CheckIcon />
      </ToggleButton>
    </ToggleButtonGroup>
        </div>

  );
}


/* import './App.css';
import * as React from 'react';
import { XGrid } from '@material-ui/x-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
];
const slots= [3, ' ', ' ', ' '];
const rows = []
slots.forEach((slots)=>{
  rows.push(<li>{slots}</li>)
})

export default function DataGridDemo() {
  return (
    <div style={{ height: 900, width: '100%' }}>
      <XGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
}

 */

/* import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function ContactInfo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
} */

/* import React from 'react'
import TextField from '@material-ui/core/TextField'
import DataGrid from 'react-data-grid'

function ContactInfo(){
    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' }
      ];
      
      const rows = [
        { id: 0, title: 'Example' },
        { id: 1, title: 'Demo' }
      ];
    <DataGrid
    columns={columns}
      rows={rows}/>
    return (
        
        <div className='header'>
            <h3 style={{marginTop: 30, marginLeft: 30}}  size = "100" align="center">Add your contact information</h3>
            <p align="center"><b><u>Name</u></b></p>
            <TextField class='btn' size = 'small' id="outlined-basic" variant="outlined" align="center" />
            <p align="center"><b><u>Email</u></b></p>
            <TextField class='btn' size = 'small' id="outlined-basic" variant="outlined" align="center" />
            <h3 style={{marginTop: 30, marginLeft: 30}}  size = "100" align="center">Select the time(s) you are available</h3>
            
        </div>
  )
} */

