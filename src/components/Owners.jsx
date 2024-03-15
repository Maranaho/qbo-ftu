import { useLocalstorageState } from "rooks"
import other from "../assets/svg/other.svg"
import employees from "../assets/svg/employees.svg"
import justme from "../assets/svg/justme.svg"
import contractor from "../assets/svg/contractor.svg"
import partners from "../assets/svg/partners.svg"
import ownersList from "../data/owners.json"
import Tile from "./Tile"
import RiveAnim from "./RiveAnim"
import bigcheck from "../assets/rive/bigcheck.riv"


const ownersImg = [justme,employees,contractor,partners,other]
const defaultOwnership = ownersList.map(()=>false)

const Owner = ({idx})=>{
    const [owners,setOwners] = useLocalstorageState("owners",defaultOwnership)
    const selected = owners[idx]

    const handleOwners = ()=>{
        const tmpOwners = [...owners]
        tmpOwners[idx] = !tmpOwners[idx]
        setOwners(tmpOwners)
    }

    return (
        <Tile
            onClick={handleOwners}
            selected={selected}
        >
            <div>
                {selected?(
                    <RiveAnim
                        src={bigcheck}
                        stateMachines="bigcheckState"
                        artboard="bigCheck"
                    />
                    ):<img src={ownersImg[idx]}/>}
                <span>{ownersList[idx]}</span>
            </div>
        </Tile>
    )
}

const Owners = () => (
    <div className="Reasons Owners">
        {ownersList.map((owner,idx)=><Owner key={owner} idx={idx} />)}
    </div>
)
export default Owners