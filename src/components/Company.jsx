import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQBOState } from '../context.jsx'
import { meta } from "../data/companiesData.js"
import randomNumber from "../utils/randomNumber"
import SearchMatch from "./SearchMatch"

const Company = ({company,idx}) => {
    
    const { dispatch } = useQBOState()
    const navigate = useNavigate()
    const loadTime = randomNumber(1500,3200)
    const delay = .07
    let timeToNavigate
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

    const handleCompanyClick =()=>{
        dispatch({type:"SELECTED_COMPANY",payload:company})
        dispatch({type:"LOADING",payload:true})
        timeToNavigate = setTimeout(()=>{
            navigate(`/greeting/${director.split(" ")[0]}`)
            dispatch({type:"LOADING",payload:false})
        },loadTime)
    }

    useEffect(()=>{
        return ()=> clearTimeout(timeToNavigate)
    },[])
    

    return (
        <article
            className="Company"
            style={{animationDelay:idx * delay + "s"}}
            onClick={handleCompanyClick}
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