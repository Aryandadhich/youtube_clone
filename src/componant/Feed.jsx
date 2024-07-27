import React,{useState , useEffect} from 'react';
import {Box, Stack , Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import {FetchFromAPI} from '../utils/FetchFromAPI';

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('Home');
  useEffect(() =>{
    FetchFromAPI(`video?part=snippet&q=${selectedCategory}`)
  },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{height: {
          sx: "auto", md: "92vh" 
        }, borderRight : '1px solid #3d3d3d', px:{sx : 0, md : 2 }}}>
           <Sidebar/>

           <Typography className = "copyright"
           //variant body2 is font style and mt = margintop
           //#fff means white color
           variant="body2" sx={{mt : 1.5, color: '#fff'}}>
              Copyright 2022 JSM Media
           </Typography>
        </Box>

        <Box p={2} sx={{ overflowY : 'auto', height : '90vh',flex:2}}>
          <Typography variant= "h4" fontWeight="bold"
          mb = {2} sx={{color : 'white'}} >
            Home 
            <span style={{ color : '#F31503'}}> Videos</span>
          </Typography>
          <Videos videos={[]}/>
        </Box>
    </Stack>
  )
} 

export default Feed
