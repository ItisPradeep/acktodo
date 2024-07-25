
import { Link, useNavigate } from "react-router-dom";
import Login from "./login";
import { useState } from "react";
import { Navigate } from "react-router-dom";





const Signup=(props)=>{



    

    
        const navigate=useNavigate()
    
        const user=props.user
        const setuser=props.setuser
    
    
        const[eusername,seteusername]=useState("")
        const[epassword,setepassword]=useState("")
    
        function handleusername(event){
        
            seteusername(event.target.value)
            }
            function handlepassword(event){
            
            
            setepassword(event.target.value)
            
            }
    
    
            function adduser(){
    
    setuser([...user,{username:eusername,password:epassword}])
    navigate("/Login")
    
            }
    
    
        return(
    
            <>
            <div className="bg-white mt-10 ml-28 mr-28 h-80 rounded-md">
    
    
    <div>
        <h1 className="font-bold text-3xl pt-8 pl-8">Hey Hi</h1>
    <p className="pl-8 pt-2">Sign up here :)</p>
    </div>
    
    <div className="mt-2">
    
        <input onChange={handleusername}    placeholder="username" className="border border-black border-solid ml-8"/><br></br>
        <input onChange={handlepassword}    placeholder="password" className="border border-black border-solid mt-2 ml-8"/><br></br>
        <input placeholder="Confirm your password" className="border border-black border-solid mt-2 ml-8"/>
    </div>
    
    
    <div className="mt-2">
        <button  onClick={adduser}   className=" bg-[#CB8202] ml-8 text-white p-1 rounded-md">Signup</button>
    </div>
    
    <div className="ml-8 mt-1">
    
    
        <p>Already have an account? <Link className="underline" to={"/"}>Login </Link></p>
    </div>
    
    </div>
    
    
    </>
    
            
            
        )
    }
    

export default Signup;