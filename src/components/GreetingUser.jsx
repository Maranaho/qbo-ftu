import NavButton from "./NavButton"
import { useParams,Link } from "react-router-dom"

const GreetingUser = () => {
    const params = useParams()
     
    return (
        <div className="GreetingUser">
            <h1>Welcome {params.user}</h1>
            <NavButton url="/review-company-details" />
  
        </div>
    )
}
 
export default GreetingUser