import {Stack} from '@mui/material';
import { categories } from '../utils/constants';
import { Category } from '@mui/icons-material';

const selectedcategory = 'New';

const Sidebar = () => (
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
                style={{
                    background: category.name === selectedcategory,
                     color : 'white'
                }}
                key={category.name}>
            <span style={{color : category.name === selectedcategory ? 
                'white' : 'red' , marginRight: '12px'}}>
                {category.icon}</span>
            <span style={{opacity : category.name === selectedcategory ? '1' : '0.8'}}
            >{category.name}</span>
        </button>
    ))}


   </Stack>
  )

export default Sidebar
