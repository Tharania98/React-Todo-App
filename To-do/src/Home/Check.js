
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tasks from '../components/Tasks/Tasks';
import Task from '../Home/Tasks'
import AddTask from '../components/AddTask/AddTask';
import Header from '../components/Header/Header';
import { TaskProvider } from '../components/context/TaskContext';
import {
  BrowserRouter as Router,

  Route,
  Link,
  Switch
} from 'react-router-dom';
function Check () {
    return <div>

           <TaskProvider>
     
     <Header />

     <div className='container'>
       <AddTask />
       <Tasks />
     </div>
   </TaskProvider>
 
       
      
    </div>
}
export default Check;