import { useParams } from "react-router-dom"
import RiveAnim  from "./RiveAnim"
import NavButton from "./NavButton"
import approved from "../assets/svg/approved.svg"
import confetti from "../assets/rive/confetti.riv"

const Approved = () => {
    const params = useParams()

     
    return (
        <div className="GreetingUser Approved">
            <h1>Nice you're approved!</h1>
            <img src={approved}/>
            <div className="btnCtn">
                <NavButton url="/bring-your-money" />
            </div>
            <RiveAnim
                src={confetti}
                stateMachines="confetti"
                artboard="confetti"
            />
        </div>
    )
}
 
export default Approved