import {useState} from 'react'; 


export default function NumberBox() {

    // useState is one the many React hooks
    // a react hook is a function that provide 
    // some react features. 

    // useState registers a state variable 
    // The returns: 
    // 1. The current value of the state variable
    // 2. A Function to modify the value of the state variable
    //    also known as a mutator function

    // Any state variable change, the component function
    // is called again and it will be the most updated

    let [count, setCount] = useState(0); 

    const boxStyle = {
        width: "50px",
        height: "50px",
        border: "1px solid black",
        padding:"10px"
    }

    const clicked = () => {
        // For react to know that a state variable has changed
        // is to use the mutator function
        // setCount(count + 1); <-- not ideal
        setCount( ()=>{
            return count + 1
        })
    }

    return <div style={boxStyle} onClick={clicked}

    >
        {count}
    </div>
}