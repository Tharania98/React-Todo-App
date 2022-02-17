import { motion } from 'framer-motion';
import TaskContext from '../context/TaskContext';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddTask.css';
const AddTask = () => {
  const { addTasks } = useContext(TaskContext);
  const [text, setText] = useState({ topic: '', content: '' });
  const handleTopic = (e) => {
    setText({ ...text, topic: e.target.value });
  };
  const handleContent = (e) => {
    setText({ ...text, content: e.target.value });
  };
  const handleSubmit = () => {
    setText({ topic: '', content: '' });
    if (text.topic.trim() !== '' && text.content.trim() !== '') {
      addTasks(text.topic, text.content);
    } else {
      errorMessage();
    }
  };
  const errorMessage = () => {
    toast.error('All fields are mandatory');
  };
  return (
    <div className='add-task'>
      <ToastContainer />
      <div className='add-task__title'>
        <img
          className='add-task__title__icon'
          src='./svg/add-task.svg'
          alt=''
        />
        <h2 className='add-task__title__text'> Create New Task</h2>
      </div>
      <div className='add-task__inputs'>
        <div>
          <p className='add-task__lether-count'></p>
          <input
           
            value={text.topic}
            onChange={handleTopic}
            className='input add-task__inputs__name'
            type='text'
            placeholder='Todo title'
          />
        </div>
        <br/>
        <div>
          <p className='add-task__lether-count'></p>
          <textarea
            
            value={text.content}
            onChange={handleContent}
            className='input add-task__inputs__content'
            type='text'
            placeholder='Todo description'
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleSubmit}
          className='add-task__inputs__submit'
        >
          Create New Task
        </motion.button>
        
      </div>
    </div>
  );
};

export default AddTask;
