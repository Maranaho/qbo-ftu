import { useState,useEffect } from "react"
import SmallFooter from "./SmallFooter"
import intuitbrand from "../assets/svg/intuitbrand.svg"
import SigninForm from "./SigninForm"
import QBMoneyAdd from "./QBMoneyAdd"
import Loading from "./Loading"



const Signin = () => {
    
    const [loading,setLoading] = useState(true)
    const waitTime = 3000
    let time
    
    useEffect(()=>{
        time = setTimeout(()=>{
            setLoading(false)
        },waitTime)
        return ()=> clearTimeout(time)
    },[])
    return (
        <div className="Signin">
            <img src={intuitbrand} width="350"/>
            <section className="FormCtn">
                {loading?<Loading/>:<SigninForm/>}
                <QBMoneyAdd/>
            </section>
            <SmallFooter/>
        </div>
    )
}
 
export default Signin