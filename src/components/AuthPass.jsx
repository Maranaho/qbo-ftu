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
                <div>
                    <img src={qblogo}/>
                    <span>QBDT</span>
                </div>
                <div>
                    <span>Maranaho N'Guessan</span>
                    <a
                        className="btn dark mini"
                        href="https://github.com/Maranaho/qbo-ftu"
                        target="_blank"
                    >Repo</a>
                </div>
            </div>
            <header>
                <h1>QBO FTU <br/> user testing</h1>
                <p>Thank you for helping us test QuickBooks Online First Time Use experience.</p>
                <p>Sign up for QuickBooks and arrive at your Dashboard.</p>
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