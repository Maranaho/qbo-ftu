import { useQBOState } from '../context.jsx'
import { useEffect,useState } from "react"

const Save = ({parentIdx}) => {
    const { state:{ opens },dispatch } = useQBOState()
    const [disabled,setDisabled] = useState(false)
    let wait
    let wait2
    let time2
    
    const waitTime = 1000

    const handleSaveClick = ()=>{
        setDisabled(true)
        wait = setTimeout(toggleAccordion,waitTime)
    }
    const toggleAccordion =()=>{
        const tmpOpens = [...opens]
        tmpOpens[parentIdx] = false
        tmpOpens[parentIdx + 1] = true
        dispatch({type:"OPENS",payload:tmpOpens})
        time2 = setTimeout(()=>setDisabled(false),200)
    }


    const cleanUp = ()=> {
        clearTimeout(wait)
        clearTimeout(wait2)
    }
    useEffect(cleanUp,[])
    
    return (
        <div className="Save">
            <button
                disabled={disabled}
                className="btn"
                onClick={handleSaveClick}
            >
                Save and continue
            </button>
        </div>
    )
}
 
export default Save