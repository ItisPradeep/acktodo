import ReactDOM from 'react-dom/client'
import React, { useState } from 'react'
import Header from './Header';
import Card from './Card';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Todocontainer from './todocontainer';
import Landing from '../pages/landing';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));





    const App=()=>{
        const[user,setuser] = useState([
    
            {
        
                username:"pradeep",
                password:"123"
            }
        ])
    
    return(


       
<BrowserRouter>



<Routes>
<Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
<Route path='/signup' element={<Signup  user={user} setuser={setuser}/>}></Route>
<Route path='/landing'element={<Landing/>}></Route>



</Routes>
 
</BrowserRouter>



)
}    
        
 export default App       
        

    