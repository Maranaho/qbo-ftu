import { useState } from "react"
import NavButton from "./NavButton"
import { useQBOState } from '../context.jsx'
import qblogo from "../assets/svg/qblogo.svg"

const AuthPass = () => {
    const [userPass,setUserPass] = useState("")
    const { state:{ access } } = useQBOState()

    return (
        <div className="AuthPass">
            <div className="qblogo">
                <img src={qblogo}/>
                <span>QBDT</span>
            </div>
            <header>
                <h1>QBO FTU <br/> user testing</h1>
                <p>Je sais pas encore quoi ecrire mais ca va venir j'espere</p>
                <input
                    type="password"
                    placeholder="Password..."
                    value={userPass}
                    onChange={e=>setUserPass(e.target.value)}
                />
                <NavButton
                    disabled={userPass !== access}
                    className="bubble"
                    url="/marketing"
                    label="Enter"
                />
            </header>
        </div>
    )
}
 
export default AuthPass