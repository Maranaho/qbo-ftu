import { useLocalstorageState } from "rooks"
import tabs from '../assets/svg/tabs.svg'

const QBOHead = () => {
    const [firstName] = useLocalstorageState("firstName","")
    
    return (
        <header className="QBOHead">
            <h1>
                <span>Good morning,</span>
                <span>{firstName}</span>
            </h1>
            <img className="tabs" src={tabs}/>
        </header>
    )
}
 
export default QBOHead