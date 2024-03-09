import { useState,useRef,useEffect } from "react"
import chevron from "../assets/svg/chevron-down.svg"

const AccordionRenderedChild = ({
    expandedHeight,
    children,
    title = "No title"
}) => {

    const btnRef = useRef(null)
    const [ height,setHeight ] = useState(0)

    return (
        <article className={`AccordionChild ${height > 0 ? "expanded":""}`}>
            <button onClick={()=>setHeight(height === 0?expandedHeight : 0)}>
                <img src={chevron}/>
                <h4>{title}</h4>
            </button>
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