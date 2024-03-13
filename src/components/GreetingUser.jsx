import { useParams } from "react-router-dom"
import RiveAnim  from "./RiveAnim"
import NavButton from "./NavButton"
import welcome from "../assets/svg/welcome.svg"
import confetti from "../assets/rive/confetti.riv"

const GreetingUser = () => {
    const params = useParams()

     
    return (
        <div className="GreetingUser">
            <h1>Almost there {params.user}!</h1>
            <p>87% of your company's data has been succesfully populated. Next up review your information.</p>
            <img src={welcome}/>
            <div className="btnCtn">
                <NavButton url="/review-company-details" />
            </div>
            <RiveAnim
                src={confetti}
                stateMachines="confetti"
                artboard="confetti"
            />
        </div>
    )
}
 
export default GreetingUser