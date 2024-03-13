import Field from "./Field"
import DropDown from "./DropDown"
import meta from "../data/meta.json"
import Save from "./Save"
import ReviewYourInfo from "./ReviewYourInfo"

import { useLocalstorageState } from "rooks"

const AboutYourBusiness = () => {
    const [selectedCompany,setSelectedCompany] = useLocalstorageState("selectedCompany",null)
    const [businessAddress,setBusinessAddress] = useLocalstorageState("businessAddress",meta.zipcode[selectedCompany.zip].address)
    const [zips,setZips] = useLocalstorageState("zips",meta.zipcode[selectedCompany.zip].zip)
        const handleChange = (val,key)=> {
            const tmpCompany = {...selectedCompany}
            tmpCompany[key] = val
            setSelectedCompany(tmpCompany)
        }
    return (
        <div className="AboutYourBusiness">
            <p>We'll use this info to set up your account and create your QuickBooks Network profile.</p>
            <div className="halfField">
                <Field
                    label="Legal business name"
                    value={selectedCompany.name}
                    onChange={e=>handleChange(e.target.value,"name")}
                />

                <Field
                    label="Website (optional)"
                    value={selectedCompany.website}
                    placeholder="Website or social media link (Yelp,Facebook)"
                    onChange={e=>handleChange(e.target.value,"website")}
                />
            </div>
            <DropDown
                typable
                label="Industry"
                options={meta.industries}
                onChange={selectedOption=>handleChange(selectedOption,"industry")}
                selected={selectedCompany.industry}
            />
            <DropDown
                className="BusinessType"
                label="Business type"
                options={meta.companiesTypes}
                onChange={selectedOption=>handleChange(selectedOption,"companyType")}
                selected={selectedCompany.companyType}
            />
            <div className="halfField">
                <Field
                    label="Business address"
                    value={businessAddress}
                    onChange={e=>setBusinessAddress(e.target.value)}
                />

                <Field
                    label="Apt, suit, bldg, etc."
                    value={selectedCompany.apt}
                    onChange={e=>handleChange(e.target.value,"apt")}
                />
            </div>
            <Field
                label="ZIP code"
                value={zips}
                onChange={e=>setZips(e.target.value)}
                />
            <ReviewYourInfo />
            <Save parentIdx={1} />
        </div>
    )
}
 
export default AboutYourBusiness