import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useQBOState } from '../context'
import SideNav from './SideNav'
import TopBar from './TopBar'
import QBOHead from './QBOHead'
import DashBoard from './DashBoard'
import Loading from './Loading'

const QBO = () => {
    
    const location = useLocation()
    const {dispatch } = useQBOState()
    const [loading,setLoading] = useState(true)
    const waitTime = 3000
    let time
    
    useEffect(()=>{
        time = setTimeout(()=>{
            setLoading(false)
        },waitTime)
        return ()=> clearTimeout(time)
    },[])
    useEffect(()=>dispatch({type:"UPDATE_PROGRESS",payload:location.pathname}),[])
    
    return (
        <div className="QBO">
            <SideNav/>
            <section>
                <TopBar/>
                <div className="Home">
                    <QBOHead/>
                    {loading?<Loading/>:<DashBoard/>}
                </div>
            </section>
        </div>
    )
}
export default QBO