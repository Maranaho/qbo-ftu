import { useLocalstorageState } from "rooks"
import bank from "../assets/svg/bank.svg"
import getpaid from "../assets/svg/getpaid.svg"
import track from "../assets/svg/track.svg"
import elseImg from "../assets/svg/else.svg"
import reasons from "../data/reasons.json"
import Tile from "./Tile"
import RiveAnim from "./RiveAnim"
import bigcheck from "../assets/rive/bigcheck.riv"


const reasonImg = [getpaid,track,bank,elseImg]

const Reason = ({idx})=>{
    const [reason,setReason] = useLocalstorageState("reason",null)
    const selected = reason === idx
    return (
        <Tile
            onClick={()=>setReason(idx)}
            selected={selected}
        >
            <div>
                {selected?(
                    <RiveAnim
                        src={bigcheck}
                        stateMachines="bigcheckState"
                        artboard="bigCheck"
                    />
                    ):<img src={reasonImg[idx]}/>}
                <span>{reasons[idx]}</span>
            </div>
        </Tile>
    )
}

const Reasons = () => (
    <div className="Reasons">
        {reasons.map((reason,idx)=><Reason key={reason} idx={idx} />)}
    </div>
)
export default Reasons