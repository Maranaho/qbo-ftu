import NavButton from './NavButton'
import moneyin from "../assets/svg/moneyin.svg"
import stashtext from "../assets/svg/stashtext.svg"

const BringMoney = () => {
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