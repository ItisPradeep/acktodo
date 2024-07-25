const Card=(props)=>{



    return(


        <>
        
       

<div className=" h-28 w-32 flex-grow m-5 rounded-md" style={{backgroundColor:props.bgcolor}}>
<h1 className="font-bold text-2xl text-center pt-5" >{props.title}</h1>
<p className="text-center">{props.subtitle}</p>



</div>

        
        
        
        </>
    )
}

export default Card