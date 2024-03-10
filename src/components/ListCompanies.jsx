import { useQBOState } from '../context.jsx'
import Company from './Company'

const ListCompanies = ({companiesMap}) => {

    const { state:{ limiter } } = useQBOState()

    
    return (
        <div className="ListCompanies">
            {companiesMap
                .sort((a,b)=>a.name.localeCompare(b.name))
                .map((company,idx)=>(
                    <Company
                        idx={idx}
                        company={company}
                        key={company.key}
                    />
                ))
                .slice(0,limiter)
            }
        </div>
    )
}
 
export default ListCompanies