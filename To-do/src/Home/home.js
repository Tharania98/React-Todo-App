import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from "@material-ui/core/Box";
import { styled } from '@material-ui/core/styles';
import Form from "react-bootstrap/Form";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
      minWidth: 105,
      flexGrow: 1,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    paper: {
      height: 140,
      width: 100,
    },
    
    pos: {
      marginBottom: 12,
    },
  });

function Home (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
    const [value, setValue] = React.useState(0);
    const [show, setShow] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
    return <div>
         <AppBar position="static">
          <Toolbar style={{backgroundColor: 'BLACK'}}>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  >
              
           Welcome to   Todo Application 
             
            </Typography>
            <div class="login">
           <img src="images/logo.png" alt="BigCo Inc. logo" height="150" width="200"/>
           </div>
          </Toolbar>
        </AppBar>

        <div class="hello">
      <button className='loginbutton'>
        
         <Card className={classes.root} variant="outlined" style={{backgroundColor: '#00bfb2', backgroundImage:'linear-gradient(315deg, #00bfb2 0%, #028090 74%)'}}>
      <CardContent>
       
        <img src="images/login.png" alt="login" height="60" width="60" />
        <br/>
      <br/>
        <Typography variant="h5" component="h2">
       Login to your account using your Email and Password
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         
       
        </Typography>
        <Typography variant="body2" component="p">
       
        <Form onSubmit={handleSubmit}>
    <br/>
     
      <TextField id="outlined-basic" label="Email" variant="outlined"  autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/> 
      <br/>
      <br/>
      <br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
    </Form>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         
       Forgot your password?
        </Typography>
        <Button variant="contained" type="submit" style={{backgroundColor: '#29e7cd'}} > <a href="/Check">SIGN - IN</a></Button>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card> 
    
    </button>
    
  
    </div> 
    <div class="toggle" >
    {show && 
          <a href="/Grid">
         <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         
        </Typography>
        <img src="images/cart.png" alt="BigCo Inc. logo" height="60" width="60"
        />
        <Typography variant="h5" component="h2">
       Development Environments:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <a href="/Login" >
        
       </a>
        </Typography>
        <Typography variant="body2" component="p">
       
          <br />
       target-dlma.symbox.com
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card> 
    </a> 
  }
   </div>
        </div>

}
 
export default Home;