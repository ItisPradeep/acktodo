import { useState } from "react"

const Todocontainer=()=>{

const[listitem,setlistitem]=useState([{id:1,activity:"Go for a walk"},{id:2,activity:"Go to gym"}])

const handleevent=(removeid)=>{

var temp=listitem.filter(function(item){

if(item.id==removeid)
    {

return(false)


}

else{

    return(true)
}


    
})
setlistitem(temp)
}


const[input,setinput]=useState("")

const handlechange=(event)=>{

    setinput(event.target.value)

}

const handleinput=()=>{


    setlistitem([...listitem,{id:listitem.length+1,activity:input}])
    setinput("")
}

    return(
<> 


<div >
    
    <h1 className="font-bold text-2xl">Manage Activities</h1>
    <input value={input} onChange={handlechange} type="text" placeholder="Enter your activities" className="border  border-solid border-black p-1 m-1 mt-3"/>
    <button onClick={handleinput} className="bg-black text-white p-1 border border-black border-solid">ADD</button>
    
 </div>


 <div id="listcontainer" className="bg-violet-400 w-96 ml-10 rounded-md flex-grow "> 
    
    <h1 className="font-bold text-2xl p-1 ml-2">Todays Activities</h1>
    {listitem.length===0? <p className="ml-4">  You havent added anything yet</p>:""}
    
    {

listitem.map(function(item){

return(
<>  <li>{item.activity} - <button className="text-red-700" onClick={()=>{handleevent(item.id)}}> Delete  </button></li></>

)

})
}
    
 </div>






</>
       
    )
}

export default Todocontainer