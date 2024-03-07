import { useEffect } from "react"
import { useQBOState } from '../context.jsx'
import { companies,meta } from "../data/companiesData.js"
import SearchHead from "./SearchHead"
import ListCompanies from "./ListCompanies"
import NoResult from "./NoResult"
import Loading from "./Loading"

const Demo = () => {

    const { state:{ searchValue,listLength,loading },dispatch } = useQBOState()

    const filteredCompany = company =>{
        const { name,director,zip:post,companyNumber } = company
        const zipCode = meta.zipcode[post]
        const { zip, address } = zipCode
        const nameMatches = name.toLowerCase().includes(searchValue.toLowerCase())
        const directorMatches = director.toLowerCase().includes(searchValue.toLowerCase())
        const addressMachtes = address.toLowerCase().includes(searchValue.toLowerCase())
        const zipMachtes = zip.toLowerCase().includes(searchValue.toLowerCase())
        const companyNumberMatches = companyNumber.toLowerCase().includes(searchValue.toLowerCase())
        const matches = nameMatches || directorMatches || addressMachtes || zipMachtes || companyNumberMatches
        return searchValue!== "" && matches
    }

    const companiesMap = companies.filter(company=>filteredCompany(company))
    const noResult = !listLength && searchValue !== ""
    const getLength = ()=> dispatch({type:"LIST_LENGTH",payload:companiesMap.length>0})
    useEffect(getLength,[companiesMap.length])

    return (
        <main>
            <SearchHead />
            {loading && !noResult ?<Loading/>:<ListCompanies companiesMap={companiesMap}/>}
            {noResult && <NoResult/>}
        </main>
    )
}
 
export default Demo;