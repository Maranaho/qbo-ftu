import {
    useEffect,
    useRef
} from "react"

const MeasuringPurposes = ({ children,setHeights }) => {
    const childRefs = useRef([])

    useEffect(() => {

        const childInfo = children.map((_, idx) => {
          const ref = childRefs.current[idx]
          const title = children[idx].props.title
          const noData = {title:"",height:0}
          const height = ref.getBoundingClientRect().height
          const info = {height,title}
          return ref ? info : noData
        })
      
      setHeights(childInfo)
    }, [childRefs])
  
    return (
      <div className="MeasuringPurposes">
        {children.map((child, idx) => (
            <div
              key={`child${idx}`}
              ref={el=>(childRefs.current[idx] = el)}
              className="AccordionMeasuringChild"
            >
              {child}
            </div>
          ))}
      </div>
    )
  }

  export default MeasuringPurposes