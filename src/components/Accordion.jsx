import { useState,useEffect } from "react"
import MeasuringPurposes from "./MeasuringPurposes"
import { AccordionChild } from "./AccordionChild"
import AccordionRenderedChild from "./AccordionRenderedChild"

const AccordionParent = ({children,unlink=false}) => {
    const [ heights,setHeights ] = useState(null)
    const [ opens,setOpens ] = useState(null)

      useEffect(()=>setOpens(children.map(()=>false)),[])
    return (
        <section className="AccordionParent">
            {heights&&children.map((child,idx)=>{
                const { title, height } = heights[idx]
                return (
                    <AccordionRenderedChild
                        idx={idx}
                        opens={opens}
                        unlink={unlink}
                        setOpens={setOpens}
                        expandedHeight={height}
                        title={title}
                        key={`trueChild${idx}`}
                        children={child}
                    />
                )
            })}
            <MeasuringPurposes
                setHeights={setHeights}
                children={children}
            />
        </section>
    )
}
 
export { AccordionParent, AccordionChild }