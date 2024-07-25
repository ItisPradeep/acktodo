import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";



const Login=(props)=>{

    const navigate=useNavigate()
    const user=props.user
    const setuser=props.setuser
    
    const[eusername,seteusername]=useState("")
    const[epassword,setepassword]=useState("")
    const[reguser,setreguser]=useState(true)
    
    
    function handleusername(event){
    
    seteusername(event.target.value)
    }
    function handlepassword(event){
    
    
    setepassword(event.target.value)
    
    }
    function checkinput(){
    
        var userfound=false

    user.forEach(function(item){

    if(item.username==eusername&&item.password==epassword)
        {
    
    console.log("Login successful")
    userfound=true
    navigate("/Landing",{state:{user:eusername}})
    
    }
    
    })
        

    if(userfound===false){

        console.log("login failed")
        setreguser(false)
    }
    }
    

    return(
<>

<div className="bg-white mt-10 ml-28 mr-28 h-80 rounded-md">


<div>
    <h1 className="font-bold text-3xl pt-8 pl-8">Hey Hi</h1>


{

    reguser?<p className="pl-8 pt-2">I will help you to manage your activities after you login :)</p>:<p className="text-red-600 pl-8 pt-2">Please signin before you login</p>
}
</div>

<div className="mt-2">

    <input onChange={handleusername}  placeholder="username" className="border border-black border-solid ml-8"/><br></br>
    <input onChange={handlepassword} placeholder="password" className="border border-black border-solid mt-2 ml-8"/><br></br>
    
</div>


<div className="mt-2">
    <button onClick={checkinput}     className="ml-8 bg-violet-500 text-white p-1 rounded-md">login</button>
</div>

<div className="ml-8 mt-1">


    <p>Dont have an account ? <Link className="underline" to={"/Signup"}>Signup </Link></p>
</div>

</div>


</>



    )
}

export default Login;


