import { useState } from "react"
import ChildA from "./Children/ChildA"
import ChildB from "./Children/ChildB"

const App2 = () =>{
    const[text,settext]= useState('')
    const ipValue = (event) =>{
        settext(event.target.value)
       console.log(event.target.value)
    }
    return(
        <div>
            <ChildA name={text} textChange = {ipValue}/>
            <ChildB name={text}/>
        </div>
    )
}
export default App2