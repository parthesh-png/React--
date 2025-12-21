import {useState}  from "react"   //to run the component again we need state 

function Counter(){

    const [number, setNumber] = useState(0); //usestate is hook has initial value

    // let number = 0;

    function handleClick(e){
        e.stopPropagation();
        // number++;
        setNumber(number=>number+1)
        // setNumber(number+1)
        console.log(number) 
 
    }

    return(
        <>
        <h1 style ={{color:'white'}}>{number}</h1>
        <button onClick={handleClick}> Add</button>

        </>
    )


}

export default Counter;