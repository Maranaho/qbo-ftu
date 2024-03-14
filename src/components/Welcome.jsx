import { useLocalstorageState } from "rooks"
import NavButton from "./NavButton"
import Reasons from './Reasons'

const Welcome = () => {
    
    const [reason] = useLocalstorageState("reason",null)
    return (
        <div className="Survey Welcome">
            <h1>Welcome! What's the main reason you're here?</h1>
            <h2>Pick one you'll still get everything in QuickBooks Money.</h2>
            <Reasons />
            <div className="btnCtn">
                <NavButton
                    label="Next"
                    url="/track-money"
                    disabled={reason === null}
                />
            </div>
        </div>
    )
}
 
export default Welcome