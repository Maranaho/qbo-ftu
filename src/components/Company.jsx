
import { useQBOState } from '../context.jsx'
import { meta } from "../data/companiesData.js"
import SearchMatch from "./SearchMatch"

const Company = ({company,idx}) => {
    
    const { dispatch } = useQBOState()
    const delay = .07
    const {
            name,
            director,
            zip:post,
            industry,
            companyType,
            isDissolved,
            dissolvedDate,
            companyNumber,
        } = company
        const zipCode = meta.zipcode[post]
        const { zip, address } = zipCode

    return (
        <article
            className="Company"
            style={{
                animationDelay:idx * delay + "s"
            }}
        >
            <h3>
                <SearchMatch text={name}/>
                <span className={meta.types[companyType].toLowerCase()}>{meta.types[companyType]}</span>
            </h3>
            <div>
                <SearchMatch text={companyNumber.split("-")[1]}/>
                <SearchMatch text={director}/>
                <div>
                    {isDissolved&&<span> Dissolved on {dissolvedDate}</span>}
                </div>
                <SearchMatch text={meta.industries[industry]}/>
            </div>
            <p>
                <SearchMatch text={address}/>
                <SearchMatch text={zip}/>
            </p>
        </article>
    )
}
 
export default Company;