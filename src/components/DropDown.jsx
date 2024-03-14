import { useState,useEffect,useRef } from "react"
import chevron from "../assets/svg/chevron-down.svg"

const DropDown = ({
    label,
    selected = 0,
    onChange,
    options = [],
    typable,
    className
}) => {

    const [focus,setFocus] = useState(false)
    const inputRef = useRef(null)

    const selectInput =()=>{
        if(inputRef.current){
            if(focus && typable) inputRef.current.select()
            if(!focus) inputRef.current.blur()
        }
    }

    const handleOptionClick = e =>{
        if(e.target.nodeName === "LI"){
            const selectedOption = options.indexOf(e.target.innerText)
            onChange(selectedOption)
            setFocus(false)
        }
    }

    useEffect(selectInput,[focus,inputRef.current])

    return (
        <div
            tabIndex="0"
            onFocus={()=>setFocus(true)}
            className={`DropDown ${focus?"focus":""} ${className}`}
            >
            {label&&<label>{label}</label>}
            <div className="clickableInput">
                <input
                    ref={inputRef}
                    readOnly={!typable}
                    value={options[selected]}
                    onChange={onChange}
                />
                <button className="chevron"><img src={chevron}/></button>
            </div>
            {focus&&(
                <ul
                    onClick={handleOptionClick}
                    onMouseLeave={()=>setFocus(false)}
                >
                    {options.map((option,idx)=>(
                        <li
                            key={option}
                            className={selected === idx ? "selected":""}
                        >{option}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
 
export default DropDown