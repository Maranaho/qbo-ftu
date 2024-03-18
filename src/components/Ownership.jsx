import { useLocalstorageState } from "rooks"
import { useQBOState } from '../context'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import NavButton from "./NavButton"
import Owners from './Owners'
import ownersList from "../data/owners.json"

const defaultOwnership = ownersList.map(()=>false)

const Ownership = () => {
    
    const location = useLocation()
    const {dispatch } = useQBOState()
    const [owners] = useLocalstorageState("owners",defaultOwnership)
    useEffect(()=>dispatch({type:"UPDATE_PROGRESS",payload:location.pathname}),[])

    return (
        <div className="Survey Ownership">
            <h1>Do other people work at your business?</h1>
            <h2>Select all that apply. This info helps make the app work better for you.</h2>
            <Owners />
            <div className="btnCtn">
                <NavButton
                    label="Back"
                    variant="secondary"
                    url="/track-money"
                />
                <NavButton
                    label="Next"
                    url="/source-of-income"
                    disabled={!owners.filter(owner=>owner).length}
                />
            </div>
        </div>
    )
}
 
export default Ownership