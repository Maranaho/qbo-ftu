import { useLocalstorageState } from "rooks"
import Field from './Field'
import Checkbox from './Checkbox'

const UpdateBusinessName = () => {
 
    const [selectedCompany,setSelectedCompany] = useLocalstorageState("selectedCompany",null)
    const [hasCoOwners,setHasCoOwners] = useLocalstorageState("hasCoOwners",false)

    const handleChange = e=> {
        const tmpCompany = {...selectedCompany}
        tmpCompany.name = e.target.value
        setSelectedCompany(tmpCompany)
    }

    return (
        <div className="UpdateBusinessName">
            <Field
                label="Your name or business name"
                value={selectedCompany.name}
                onChange={handleChange}
                helperText="26 characters max. We'll send your card to your personal address."
            />
            <Checkbox
                checked={hasCoOwners}
                onChange={()=>setHasCoOwners(!hasCoOwners)}
                label="I have co-owners with 25% or more ownership"
            />
            <p className="disclaimer">QuickBooks credit card is issued by Green Dot Bank, member of FDIC, persuant to a licence from VISA U.S.A Inc.</p>
        </div>
    )
}
 
export default UpdateBusinessName