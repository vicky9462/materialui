import { Grid } from '@mui/material';
import React from 'react'

import BasicCard from './Card';




function App() {

  return (
   <>
   <Grid container spacing={4} >
     <Grid item xs={12} sm={6} md={4}>
       <BasicCard/>
     </Grid>
     <Grid item xs={12} sm={6} md={4}>
       <BasicCard/>
     </Grid>
     <Grid item xs={12} sm={6} md={4}>
       <BasicCard/>
     </Grid>
     <Grid item xs={12} sm={6} md={4}>
       <BasicCard/>
     </Grid>
   </Grid>
   
  </>)
}

export default App

