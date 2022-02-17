
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
function Grid () {
    return <div>
          <AppBar position="static">
          <Toolbar>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Symbox Components
              
            </Typography>
            <div class="login">
           <img src="images/login.png" alt="BigCo Inc. logo" height="40" width="40"/>
           </div>
          </Toolbar>
        </AppBar>
        <h1>Welcome to Deployment Environment Page</h1>
 
       
      
    </div>
}
export default Grid;