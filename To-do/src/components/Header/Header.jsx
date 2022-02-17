import './Header.css';
import Tasks from '../Tasks/Tasks';
const Header = () => {
  return (
    <header className='header'>
      <img className='header__icon' src='./svg/main.svg' alt='' />
      <h1 className='header__title'>Todo App</h1>
      {/* <h6 className='header__tasks'><a href="/Tasks">Task List</a></h6> */}
      {/* <Tasks /> */}
    </header>
  );
};
export default Header;
