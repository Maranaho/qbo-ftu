import NavButton from './NavButton'
import freelancer from "../assets/svg/freelancer.svg"
import tracktext from "../assets/svg/tracktext.svg"

const TrackMoney = () => {
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