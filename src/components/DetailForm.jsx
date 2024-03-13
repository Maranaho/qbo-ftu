import { AccordionParent, AccordionChild } from './Accordion'
import ReviewHeader from './ReviewHeader'
import BusinessCardApplication from './BusinessCardApplication'
import AboutYourBusiness from './AboutYourBusiness'
import AboutYou from './AboutYou'
import LegalText from './LegalText'

const DetailForm = () => (
    <div className="DetailForm">
        <ReviewHeader/>
        <AccordionParent>
            <AccordionChild 
                
                title="Business checking account and debit card"
            >
                <BusinessCardApplication />
            </AccordionChild>
            <AccordionChild openByDefault title="About your business" >
                <AboutYourBusiness />
            </AccordionChild>
            <AccordionChild title="About you">
                <AboutYou />
                <LegalText />
            </AccordionChild>
        </AccordionParent>
    </div>
)
 
export default DetailForm