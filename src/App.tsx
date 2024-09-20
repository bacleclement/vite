import { Outlet } from 'react-router-dom';
import './App.css'
import { StickyNavbar } from './components/StickyNavbar';
const App = ()  => {

  return (
    <>
      <div className='flex flex-col w-full items-start self-center gap-3'>
        <StickyNavbar></StickyNavbar>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App
