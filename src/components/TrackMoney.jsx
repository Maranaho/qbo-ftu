import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useQBOState } from '../context'
import NavButton from './NavButton'
import freelancer from "../assets/svg/freelancer.svg"
import tracktext from "../assets/svg/tracktext.svg"

const TrackMoney = () => {

    const location = useLocation()
    const {dispatch } = useQBOState()
    useEffect(()=>dispatch({type:"UPDATE_PROGRESS",payload:location.pathname}),[])

    return (
        <div className="TrackMoney Survey">
            <div className="trackImg">
                <img src={tracktext} />
                <img src={freelancer} />
            </div>
            <div className="btnCtn">
                <NavButton
                    variant="secondary"
                    label="Back"
                    url="/reasons"
                />
                <NavButton
                    label="Let's go!"
                    url="/ownership"
                />
            </div>
        </div>
    )
}
 
export default TrackMoney;