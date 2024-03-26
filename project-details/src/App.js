import { Outlet } from 'react-router-dom';
import './App.css';
import ConnectwithMe from './Components/ConnectwithMe';
function App() {
  return (<>
    <div className='ml-2'> <ConnectwithMe/></div>
   
    <div className='w-[95%] m-auto mt-3 border border-solid border-[#333] rounded-sm sm:w-[50%]'>
    <Outlet/>
    </div>
    </>
  );
}

export default App;
