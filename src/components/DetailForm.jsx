import { useQBOState } from '../context'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { AccordionParent, AccordionChild } from './Accordion'
import ReviewHeader from './ReviewHeader'
import BusinessCardApplication from './BusinessCardApplication'
import AboutYourBusiness from './AboutYourBusiness'
import AboutYou from './AboutYou'
import LegalText from './LegalText'


const DetailForm = () => {
    
    const location = useLocation()
    const {dispatch } = useQBOState()
    useEffect(()=>dispatch({type:"UPDATE_PROGRESS",payload:location.pathname}),[])
    return (
    <div className="DetailForm">
        <ReviewHeader/>
        <AccordionParent>
            <AccordionChild 
                openByDefault
                title="Business checking account and debit card"
            >
                <BusinessCardApplication />
            </AccordionChild>
            <AccordionChild title="About your business" >
                <AboutYourBusiness />
            </AccordionChild>
            <AccordionChild title="About you">
                <AboutYou />
                <LegalText />
            </AccordionChild>
        </AccordionParent>
    </div>
)}
 
export default DetailForm