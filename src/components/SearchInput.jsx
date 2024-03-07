import { useRef,useState,useEffect } from "react"
import randomNumber from "../utils/randomNumber"
import { useQBOState } from '../context'
import search from "../assets/svg/search.svg"

const SearchInput = () => {

    const { state:{ searchValue },dispatch } = useQBOState()
    const [focus,setFocus ] = useState(false)
    const inputRef = useRef(null)
    const loadTime = randomNumber(500,900)
    let timeout

    const handleChange = e =>{
        const val = e.target.value
        dispatch({type:"SEARCH_VALUE",payload:val})
        timeout = setTimeout(()=>{
            dispatch({type:"LOAD_COMPANIES",payload:false})
        },loadTime)
    }

    const handleKeyDown = e =>{
        if(e.key === "Enter" && inputRef.current) inputRef.current.blur()
    }
    const handleFocus = () =>{
        setFocus(true)
        if(inputRef.current) inputRef.current.select()
    }

    useEffect(()=>{
        return ()=>clearTimeout(timeout)
    },[])

    return (
        <div className={`SearchInput ${focus?"focus":""}`}>
            <button>
                <img src={search}/>
            </button>
            <input
                ref={inputRef}
                placeholder="Search by company name, number, officer name or zip code..."
                value={searchValue}
                onFocus={handleFocus}
                onBlur={()=>setFocus(false)}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}
 
export default SearchInput