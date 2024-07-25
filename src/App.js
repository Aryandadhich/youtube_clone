import React from 'react'

//this is used to enable client site routing
//route is used to mapping between a URL path & a component.
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import {Box} from '@mui/material';
import {Navbar , Feed , VideoDetail , ChannelDetail , SearchFeed} from './componant' 

const App = () => (
    //browser router used for wrap enitre application
    <BrowserRouter>
    <Box sx = {{backgroundColor : '#000'}}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail/>} />
            <Route path="/channel/:id" element={<ChannelDetail/>} />
            <Route path="/search/:searchTerm" element={<SearchFeed/>} />
            </Routes>
    </Box>
    </BrowserRouter>
)

export default App

