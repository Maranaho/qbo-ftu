import { useState } from "react"
import MeasuringPurposes from "./MeasuringPurposes"
import { AccordionChild } from "./AccordionChild"
import AccordionRenderedChild from "./AccordionRenderedChild"

const AccordionParent = ({children}) => {
    const [ heights,setHeights ] = useState(null)
    
    return (
        <section className="AccordionParent">
            {heights&&children.map((child,idx)=>{
                const { title, height } = heights[idx]
                return (
                    <AccordionRenderedChild
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