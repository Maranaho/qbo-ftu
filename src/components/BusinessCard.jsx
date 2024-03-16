import { useLocalstorageState } from "rooks"
import meta from "../data/meta.json"

const BusinessCard = ({x}) => {
    const coef = .09
    const adjustforMidView = 10
    const angle = ((x / window.innerWidth * 360) * coef) - adjustforMidView
    const [selectedCompany] = useLocalstorageState("selectedCompany",null)
    return (
        <div
            className="BusinessCard"
            style={{transform: `rotateY(${angle}deg)`}}
        >
            <span>{selectedCompany.name}</span>
        </div>
    )
}
 
export default BusinessCard