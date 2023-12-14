import {Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/comproutes/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Store from './components/Store';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Productdetails from './components/Productdetails';

import Addp from './components/Addp';


function App() {
   return (
   <>
      <Header/>

      <Routes>
        <Route   path='/' element={<Home/>}  />
        <Route   path='/Store' element={<Store/>}  />
        <Route   path='/Profile' element={<Profile/>}  />
        <Route   path='/Login' element={<Login/>}  />
        <Route   path='/Signup' element={<Signup/>}  />
        <Route   path='/Productdetails' element={<Productdetails/>}  />
        
        <Route   path='/Addp' element={<Addp/>}  />

      </Routes>

      <Footer/>
      
   </> 

  
   
   
  );

 
}
export default App;
