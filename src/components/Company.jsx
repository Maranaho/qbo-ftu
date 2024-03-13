import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQBOState } from '../context.jsx'
import { meta } from "../data/companiesData.js"
import SearchMatch from "./SearchMatch"
import RiveAnim from "./RiveAnim"
import check from "../assets/rive/check.riv"
import { useLocalstorageState } from "rooks"

const Company = ({company,idx}) => {
    
    const { dispatch } = useQBOState()
    const [selectedCompany,setSelectedCompany] = useLocalstorageState("selectedCompany",null)
    const navigate = useNavigate()
    const loadTime = 8000
    const delay = .07
    let timeToNavigate
    let time2
    const {
            key,
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
    const selected = selectedCompany && selectedCompany.key === key
    const unSelected = selectedCompany && selectedCompany.key !== key

    const handleCompanyClick =()=>{
        // dispatch({type:"SELECTED_COMPANY",payload:company})
        setSelectedCompany(company)
        time2 = setTimeout(()=>{
            dispatch({type:"FETCHING_DETAILS",payload:true})
            timeToNavigate = setTimeout(()=>{
                navigate(`/greeting/${director.split(" ")[0]}`)
                dispatch({type:"FETCHING_DETAILS",payload:false})
            },loadTime)
        },2000)
    }

    useEffect(()=>{
        return ()=> {
            clearTimeout(timeToNavigate)
            clearTimeout(time2)
        }
    },[])

    return (
        <article
            className={`Company ${selected ? "selected":""} ${unSelected ? "unSelected":""}`}
            style={{animationDelay:!unSelected ? idx * delay + "s" : "0s"}}
            onClick={handleCompanyClick}
        >
            <h3>
                <SearchMatch text={name}/>
                {!selected&&<span className={"type " + meta.types[companyType].toLowerCase()}>{meta.types[companyType]}</span>}
                {selected&&(
                    <RiveAnim
                        src={check}
                        stateMachines="check"
                        artboard="check"
                />
                )}
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