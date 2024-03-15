import Field from "./Field"
import DropDown from "./DropDown"
import meta from "../data/meta.json"
import usStates from '../data/usStates.json'
import { useLocalstorageState } from "rooks"
import Checkbox from "./Checkbox"
import NavButton from "./NavButton"

const AboutYou = () => {
    const defaultPhone = "+44 7598 863677"
    const defaultDob = "06/27/1985"
    const defaultSSN = "8967"
    const defaultState = 4
    const [userPhone,setUserPhone] = useLocalstorageState("userPhone",defaultPhone)
    const [selectedCompany,setSelectedCompany] = useLocalstorageState("selectedCompany",null)
    const metaZip = meta.zipcode[selectedCompany.zip]
    const [businessAddress,setBusinessAddress] = useLocalstorageState("businessAddress",metaZip.address)
    const [currentState,setCurrentState] = useLocalstorageState("state",defaultState)
    const [ssn,setSSN] = useLocalstorageState("ssn",defaultSSN)
    const [dob,setDob] = useLocalstorageState("dob",defaultDob)
    const [sameAddress,setSameAddress] = useLocalstorageState("sameAdress",false)
    const [firstName,setFirstName] = useLocalstorageState("firstName",selectedCompany.director.split(" ")[0])
    const [lastName,setLastName] = useLocalstorageState("lastName",selectedCompany.director.split(" ")[1])
    const [city,setCity] = useLocalstorageState("city",metaZip.address.split(",")[1])
    const [zips,setZips] = useLocalstorageState("zips",metaZip.zip)

    const handleChange = (val,key)=> {
        const tmpCompany = {...selectedCompany}
        tmpCompany[key] = val
        setSelectedCompany(tmpCompany)
    }
    return (
        <div className="AboutYou">
            <p>We'll use this info to verify you're the business owner.</p>
            <div className="halfField">
                <Field
                    label="Legal first name"
                    value={firstName}
                    onChange={e=>setFirstName(e.target.value)}
                />

                <Field
                    label="Legal last name"
                    value={lastName}
                    onChange={e=>setLastName(e.target.value)}
                />
            </div>
            <Field
                label="Mobile number"
                value={userPhone}
                onChange={e=>setUserPhone(e.target.value)}
                helperText="We'll use this for account security and verification."
                className="phoneNumber"
            />
            <div className="halfField">
                <Field
                    label="Last 4 digit of your SSN"
                    password
                    value={ssn}
                    onChange={e=>setSSN(e.target.value)}
                    helperText="Don't worry this wont impact your credit score."
                />

                <Field
                    label="Date of birth"
                    value={dob}
                    onChange={e=>setDob(e.target.value)}
                />
            </div>
          
            <div className="halfField">
                <Field
                    label="Personal address"
                    value={businessAddress}
                    onChange={e=>setBusinessAddress(e.target.value)}
                />

                <Field
                    label="Apt, suit, bldg, etc."
                    value={selectedCompany.apt}
                    onChange={e=>handleChange(e.target.value,"apt")}
                />
            </div>
            <div className="threeRows">
                <Field
                    label="ZIP code"
                    value={zips}
                    onChange={e=>setZips(e.target.value)}
                />
                <Field
                    label="City"
                    value={city}
                    onChange={e=>setCity(e.target.value)}
                />
                <DropDown
                    label="State"
                    options={usStates}
                    onChange={selectedState=>setCurrentState(selectedState)}
                    selected={currentState}
                />
            </div>
            <Checkbox
                checked={sameAddress}
                onChange={()=>setSameAddress(!sameAddress)}
                label="Same as my billing address"
            />
            <div className="finish">
                <NavButton
                    url="/approved"
                    label="Review and finish"
                />
                
            </div>
        </div>
    )
}
 
export default AboutYou