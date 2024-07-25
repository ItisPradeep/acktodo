import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/todocontainer";
import { useLocation } from "react-router-dom";


function Landing (){

const data=useLocation()
    return(
        <>
        {/*Header*/}
                    <div id="header" className= " bg-white h-96 ml-40 mr-40 mt-10 rounded-md p-5">
        
                        <Header name={data.state.user}/>
        
        {/*Card*/}
                        <div id="card" className=" block lg:flex justify-center gap-6">
                            <Card bgcolor={"#8272DA"} title={"23 Degree"} subtitle={"Chennai"} />
                            <Card bgcolor={"#CA524E"} title={"21st July"} subtitle={"14:02:14"} />
                            <Card bgcolor={"#CA8201"} title={"Built using"} subtitle={"react"} />
                        </div>
        
        
        {/*Todo container*/}
        
        <div className="flex flex-wrap">
        <Todocontainer/>
            
        </div>
        
        
                    </div>
        
        
        
        
                </>

    )
}

export default Landing;