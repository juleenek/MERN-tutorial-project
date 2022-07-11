import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import memories from './images/memories.png';
import { StyledAppBar, StyledHeading, StyledLogo } from './style';

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar sx={StyledAppBar} position='static' color='inherit'>
        <Typography sx={StyledHeading} variant='h2' align='center'>
          Memories
        </Typography>
        <img style={StyledLogo} src={memories} alt='memories' height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
