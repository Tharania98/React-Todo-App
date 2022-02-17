
import {
  BrowserRouter as Router,

  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Home/home';
import Check from './Home/Check';
import Grid from './Home/Grid';

import './Home.css';
import React from 'react';


import Tasks from './components/Tasks/Tasks';

  


function App() {
  
 
  return (
    <Router>
     <div className="App">
          
           <Switch>
           <Route path="/home">
<Home/>
        </Route>
        <Route exact path="/">
<Home/>
        </Route>
        <Route path="/Check">
<Check/>
        </Route>
        <Route path="/Grid">
<Grid/>
        </Route>
     
     
          </Switch>
          </div>
          
 
    </Router>
  );
}

export default App;