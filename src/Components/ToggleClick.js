import {useState} from "react";
export default function ToggleClick(){
    const[isOn, setIsOn] = useState(false);

    //function that sets on to off and vice versa

    const toggle = () =>{
        setIsOn(!isOn);
    }
    return(
        <>

        <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>
        <h3
        style={{color: 'green'}}>The code is: </h3>
        <pre>{code}</pre>
        </>
    )
}
const code = `
import {useState} from "react";
export default function ToggleClick(){
    const[isOn, setIsOn] = useState(false);

    //function that sets on to off and vice versa

    const toggle = () =>{
        setIsOn(!isOn);
    }
    return(
        <>

        <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>
        </>
    )
}
`