import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import UploadProduct from './components/UploadProduct/UploadProduct';
import RequireAuth from './hooks/RequireAuth/RequireAuth';
import InventoryDetails from './Inventory/InventoryDetails/InventoryDetails';
import Orders from './Orders/Orders';
import Footer from './Shared/Footer/Footer';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div className='bg-slate-200'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route Route path='/uploadPd' element={
            <UploadProduct></UploadProduct>
        }></Route >
        <Route path='/orders' element={
            <Orders></Orders>
        }></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetails></InventoryDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
