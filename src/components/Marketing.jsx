import { useEffect } from "react"
import { useQBOState } from '../context'
import { useNavigate } from "react-router-dom"

import marketing from "../assets/png/marketing.png"
import marketingheader from "../assets/png/marketingheader.png"
import footer from "../assets/svg/footer.svg"

const Marketing = () => {

    const {dispatch } = useQBOState()
    let navigate = useNavigate()
    let timeout
    const min = 400
    const max = 1800
    
    const handleNavigate = ()=>{
      dispatch({type:"LOADING",payload:true})
      timeout = setTimeout(()=>{
        navigate("/signin")
        dispatch({type:"LOADING",payload:false})
      },Math.random() * (max - min) + min)
    }
    
    useEffect(()=>{
      return ()=> clearTimeout(timeout)
    },[])


    return (
        <div className="Marketing">
            <header><img src={marketingheader} /></header>
            <img src={marketing} onClick={handleNavigate}/>
            <footer><img src={footer} /></footer>
        </div>
    )
}
 
export default Marketing