import { useState,useEffect } from "react"
import MeasuringPurposes from "./MeasuringPurposes"
import AccordionRenderedChild from "./AccordionRenderedChild"
import { useQBOState } from '../context.jsx'



const AccordionParent = ({children,unlink=false}) => {
    
    const { dispatch } = useQBOState()
    const [ heights,setHeights ] = useState(null)

      useEffect(()=>{
        const newOpens = children.map(child=>child.props.openByDefault)
        dispatch({type:"OPENS",payload:newOpens})
    },[])
    return (
        <section className="AccordionParent">
            {heights&&children.map((child,idx)=>{
                const { title, height, openByDefault } = heights[idx]
                return (
                    <AccordionRenderedChild
                        idx={idx}
                        title={title}
                        unlink={unlink}
                        children={child}
                        expandedHeight={height}
                        key={`trueChild${idx}`}
                        openByDefault={openByDefault}
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

const AccordionChild = ({children}) =><>{children}</>
export { AccordionParent, AccordionChild }