import { useQBOState } from '../context'
import { useEffect,useState } from "react"
const Progress = () => {
    
    const { state:{ routeArray,routeProgress } } = useQBOState()
    const [progress,setProgress] = useState(0)
    const updateProgress = ()=>{
        if(routeProgress){
            const idx = routeArray.indexOf(routeProgress) + 1
            const percent = Math.round(idx/routeArray.length*100)
            setProgress(percent);
        }
    }
    useEffect(updateProgress,[routeProgress])

    return (
        <div className="Progress"><div style={{width:`${progress}%`}}/></div>
    )
}
 
export default Progress