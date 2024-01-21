import { useState } from "react"

const Banner = ({val})=>{
 console.log(`This is banner, your message is: ${val}`)
 let [message, setMessage] = useState('')
 return(
    <div className="bg-lime-300 flex w-14 ">
        <h1></h1>
    </div>
 )
}

export default Banner