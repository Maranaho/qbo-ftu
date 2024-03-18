import { useQBOState } from '../context'
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import NavButton from './NavButton'
import moneyin from "../assets/svg/moneyin.svg"
import stashtext from "../assets/svg/stashtext.svg"

const BringMoney = () => {

    const location = useLocation()
    const {dispatch } = useQBOState()
    useEffect(()=>dispatch({type:"UPDATE_PROGRESS",payload:location.pathname}),[])
    return (
        <div className="TrackMoney BringMoney Survey">
            <div>
                <img src={stashtext} />
                <div className="btnCtn">
                    <NavButton
                        label="Bring in money"
                        url="/qbo"
                    />
                    <NavButton
                        variant="link"
                        label="I'll do it later"
                        url="/qbo"
                    />
                </div>
            </div>
            <div className="trackImg">
                <img src={moneyin} />
            </div>
           
        </div>
    )
}
 
export default BringMoney