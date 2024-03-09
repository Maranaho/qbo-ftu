import { useState,useEffect } from "react"
import chevron from "../assets/svg/chevron-down.svg"

const AccordionRenderedChild = ({
        idx,
        opens,
        unlink,
        setOpens,
        children,
        expandedHeight,
        title = "No title",
    }) => {

    const [ height,setHeight ] = useState(0)
    const [ inProgress,setInProgress ] = useState(false)
    const isLinked = unlink?true:opens[idx]
    const isOpen = height > 0 && isLinked

    const handleOpens = ()=>{
        const tmpOpens = opens.map(()=>false)
        tmpOpens[idx] = !tmpOpens[idx]
        setOpens(tmpOpens)
    }

    const handleTitleClick = ()=>{
        if(!inProgress)setInProgress(true)
        setHeight(height === 0?expandedHeight : 0)
        if(!unlink)handleOpens()
    }

    useEffect(()=>setHeight(opens[idx]?expandedHeight:0),[opens[idx]])

    return (
        <article className={`AccordionChild ${isOpen ? "expanded":""} ${!inProgress?"noStarted":""}`}>
            <div className="childTitle">
                <button onClick={handleTitleClick}>
                    <img src={chevron}/>
                    <h4>{title}</h4>
                </button>
                <span>In progress</span>
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