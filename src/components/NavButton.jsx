import { useEffect } from "react"
import { useQBOState } from '../context'
import { useNavigate } from "react-router-dom"
import chevronLeft from "../assets/svg/chevronLeft.svg"
import chevronLeftWhite from "../assets/svg/chevronLeftWhite.svg"


const NavButton = ({variant = "primary",label = "Continue",back,url,cb}) =>{

  const {dispatch } = useQBOState()
  let navigate = useNavigate()
  let timeout
  const min = 800
  const max = 3000

  const handleNavigate = ()=>{
    dispatch({type:"LOADING",payload:true})
    timeout = setTimeout(()=>{
      navigate(url)
      dispatch({type:"LOADING",payload:false})
    },Math.random() * (max - min) + min)
  }

  useEffect(()=>{
    return ()=> clearTimeout(timeout)
  },[])


 return (
  <button
    variant={variant}
    onClick={url?handleNavigate:cb}
    className={`btn ${variant}`}>
    {back&&<img src={variant !== "primary" ? chevronLeft : chevronLeftWhite}/>}
    <span>{label}</span>
  </button>
 )
}

export default NavButton