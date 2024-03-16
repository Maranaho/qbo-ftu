import { useEffect } from "react"
import { useQBOState } from '../context'
import { useNavigate } from "react-router-dom"
import chevronLeft from "../assets/svg/chevronLeft.svg"
import chevronLeftWhite from "../assets/svg/chevronLeftWhite.svg"


const NavButton = ({
    cb,
    url,
    back,
    disabled,
    className,
    label = "Continue",
    variant = "primary",
  }) =>{

  const {dispatch } = useQBOState()
  let navigate = useNavigate()
  let timeout
  const min = 400
  const max = 1800

  const handleNavigate = ()=>{
    if(disabled)return
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
    disabled={disabled}
    className={`btn ${variant} ${className}`}>
    {back&&<img src={variant !== "primary" ? chevronLeft : chevronLeftWhite}/>}
    <span>{label}</span>
  </button>
 )
}

export default NavButton