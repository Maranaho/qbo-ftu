import { useRef,useState } from "react"
import hideBtn from '../assets/svg/hide.svg'
import showBtn from '../assets/svg/show.svg'

const Field = ({
    label,
    value,
    placeholder,
    helperText,
    onChange,
    width,
    handleKeyDown,
    className,
    password,
}) => {

    const [visible,setVisible] = useState(false)
    const inputRef = useRef(null)
    const handleFocus = () =>{
        if(inputRef.current) inputRef.current.select()
    }

    return (
        <article
            className={`Field ${className}`}
            style={{width}}
        >
            {label&&<label>{label}</label>}
            {password&&(
                <button
                    className="showPassBtn"
                    onClick={()=>setVisible(!visible)}
                >
                    <img src={visible?hideBtn:showBtn}/>
                </button>)
            }
            <input
                type={password && !visible?"password":"text"}
                ref={inputRef}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
            />
            {helperText&&<span>{helperText}</span>}
        </article>
    )
}
 
export default Field