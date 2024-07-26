import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper , IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';

const Searchbar = () => {
  return (
    <Paper
        component="form"
        onSubmit={() => {}}
        sx={{

            backgroundRadius : 20,
            borderRadius: '20px',
            border : '1px solid #e3e3e3',
            pl:3, //padding left
            pr:1,
            boxShadow : 'none',
            mr :{ sm: 5 } //mr - margin right  , sm - small devides
        }}
    >
        <input 
        className="search-bar"
        placeholder='Search...'
        value=""
        onChange={() => {}}/>
        <IconButton type="submit" sx={{p : '7px', color: 'Red'}}>
            <Search />
        </IconButton>
      
    </Paper>
  )
}

export default Searchbar
