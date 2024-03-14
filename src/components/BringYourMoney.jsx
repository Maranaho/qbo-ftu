import NavButton from "./NavButton"
import bringyourmoney from "../assets/png/bringyourmoney.png"
import confetti from "../assets/rive/confetti.riv"

const BringYourMoney = () => {


    return (
        <div className="BringYourMoney">
            <img src={bringyourmoney}/>
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
    )
}
 
export default BringYourMoney