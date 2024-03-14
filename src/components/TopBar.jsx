import { useLocalstorageState } from "rooks"
import burgerMenu from '../assets/svg/burgerMenu.svg'
import leftSearch from '../assets/svg/leftSearch.svg'
import rightNav from '../assets/svg/rightNav.svg'

const TopBar = () => {
    const [selectedCompany] = useLocalstorageState("selectedCompany",null)
    
    return (
        <nav className="TopBar">
            <div>
                <img className="menuImg" src={burgerMenu}/>
                <span>{selectedCompany.name}</span>
                <img className="searchImg" src={leftSearch}/>
            </div>
            <img className="rightNav" src={rightNav}/>
        </nav>
    )
}
 
export default TopBar