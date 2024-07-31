import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper , IconButton} from '@mui/material';
import SearchIcon  from '@mui/icons-material/Search';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm){
       navigate(`/search/${searchTerm}`);

       setSearchTerm('');
    }
  }

  return (
    <Paper
        component="form"
        onSubmit={onhandleSubmit}
        sx={{

            backgroundRadius : 20,
            borderRadius: '20px',
            border : '1px solid #e3e3e3',
            pl:3, //padding left
            pr:1,
            boxShadow : 'none',
            mr :{ sm: 5 }, //mr - margin right  , sm - small devides
        }}
    >
        <input 
        className="search-bar"
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}/>
        <IconButton type="submit" sx={{p : '10px', color: 'Red'}}>
            <SearchIcon />
        </IconButton>
      
    </Paper>
  )
}

export default Searchbar
