import { useQBOState } from '../context'
import { useEffect,useState } from "react"
const Progress = () => {
    
    const { state:{ routeArray,routeProgress } } = useQBOState()
    const [progress,setProgress] = useState(0)
    const idx = routeArray.indexOf(routeProgress) + 1
    const updateProgress = ()=>{
        if(routeProgress){
            const percent = Math.round(idx/routeArray.length*100)
            setProgress(percent);
        }
    }
    useEffect(updateProgress,[routeProgress])

    return (
        <div className="Progress">
            <div>
                <div style={{width:`${progress}%`}}/>
            </div>
            <span>
                <span>Step</span>
                <span>{idx}</span>
                <span>/</span>
                <span>{routeArray.length}</span>
            </span>
        </div>
    )
}
 
export default Progress