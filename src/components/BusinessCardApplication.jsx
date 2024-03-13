import { useEffect,useState } from "react"
import BusinessCard from "./BusinessCard"
import UpdateBusinessName from "./UpdateBusinessName"
import Save from "./Save"

const BusinessCardApplication = () => {

    const [x,setX] = useState(0)
    const handleMouseMove = e =>setX(e.clientX)

    useEffect(()=>{
        window.addEventListener("mousemove",handleMouseMove)
        return ()=> window.removeEventListener("mousemove",handleMouseMove)
    },[])
    
    return (
        <div className="BusinessCardApplication">
            <p>Spend, stash and grow your cash with 5.00% APY on envelopes.</p>
            <BusinessCard x={x}/>
            <UpdateBusinessName />
            <Save parentIdx={0} />
        </div>
    )
}
 
export default BusinessCardApplication