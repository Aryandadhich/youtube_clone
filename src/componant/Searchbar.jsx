import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Paper , IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';

const Searchbar = () => {
  return (
    <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
            backgroundRadius : 10,
            border : '1px solid #e3e3e3',
            pl:2, //padding left
            boxShadow : 'none',
            mr :{ sm: 5 } //mr - margin right  , sm - small devides
        }}
    >
        <input 
        className="search-bar"
        placeholder='Search...'
        value=""
        onChange={() => {}}/>
        <IconButton typr="submit" sx={{p : '10px', color: 'red'}}>
            <Search />
        </IconButton>
      
    </Paper>
  )
}

export default Searchbar
