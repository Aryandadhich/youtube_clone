import React from 'react';
import {Stack} from '@mui/material';
import { categories } from '../utils/constants';


const Sidebar = ({selectedCategory, setselectedCategory}) => (
   <Stack
      direction="row"
      sx={{
        //overflowY means this is use for vertical overflow(so add scrollbar)
        //and it set to auto means adds a vertical scrollbar only if the 
        //content exceeds tha elements height.
        overflowY:"auto",
        height: {sx: 'auto', md: '95%'},
        //flexdirection is used for chnaging 
        //the layout from row to coloum for larger screen 
        flexDirection :{md : 'column'}
      }}
   >
    {categories.map((category) => (
        <button 
                className="category-btn"
                onClick={() => 
                    setselectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                     color : 'white'
                }}
                key={category.name}>
            <span style={{color : category.name === selectedCategory ? 
                'white' : 'red' , marginRight: '12px'}}>
                {category.icon}</span>
            <span style={{opacity : category.name === selectedCategory ? '1' : '0.8'}}
            >{category.name}</span>
        </button>
    ))}


   </Stack>
  )

export default Sidebar
