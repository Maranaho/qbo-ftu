import { useQBOState } from '../context.jsx'
import agent from "../assets/svg/agent.svg"
import tech from "../assets/svg/tech.svg"

const SearchHeadTitle = () => {
    const { state:{ listLength,searchValue } } = useQBOState()
    const noResult = !listLength && searchValue !== ""
    const message = noResult ? "Can't find your company..." : "Let's find your company"
    return (
        <div className="SearchHeadTitle output">
            <h2>{message}</h2>
            <img src={noResult?tech:agent} />
        </div>
    )
}
 
export default SearchHeadTitle