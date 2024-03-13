import { useState,useEffect } from "react"
import { useQBOState } from '../context.jsx'
import chevron from "../assets/svg/chevron-down.svg"

const AccordionRenderedChild = ({
    idx,
    unlink,
    children,
    expandedHeight,
    title = "No title",
}) => {
    
    const { state:{ opens },dispatch } = useQBOState()
    const [ height,setHeight ] = useState(0)
    const isLinked = unlink?true:opens[idx]
    const isOpen = height > 0 && isLinked

    const handleOpens = ()=>{
        const tmpOpens = opens.map(()=>false)
        tmpOpens[idx] = !tmpOpens[idx]
        dispatch({type:"OPENS",payload:tmpOpens})
    }

    const handleTitleClick = ()=>{
        setHeight(height === 0?expandedHeight : 0)
        if(!unlink)handleOpens()
    }

    useEffect(()=>setHeight(opens[idx] ?expandedHeight:0),[opens[idx]])


    return (
        <article className={`AccordionChild ${isOpen ? "expanded":""}`}>
            <div className="childTitle">
                <button onClick={handleTitleClick}>
                    <img src={chevron}/>
                    <h4>{title}</h4>
                </button>
            </div>
            <div
                className="childJSX"
                style={{height}}
            >
                {children}
            </div>
        </article>
    )
}

export default AccordionRenderedChild