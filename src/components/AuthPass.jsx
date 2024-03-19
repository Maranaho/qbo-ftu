import { useState } from "react"
import NavButton from "./NavButton"
import { useQBOState } from '../context.jsx'
import qblogo from "../assets/svg/qblogo.svg"
import hideBtn from '../assets/svg/hide.svg'
import showBtn from '../assets/svg/show.svg'


const AuthPass = () => {

    const [visible,setVisible] = useState(false)
    const [userPass,setUserPass] = useState("")
    const { state:{ access } } = useQBOState()
    const handleKeyDown = e =>{
        if(e.key === "Enter"){
            e.target.blur()
        }
    }

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
                <div className="inputCtn">
                    
                    <button
                        className="showPassBtn"
                        onClick={()=>setVisible(!visible)}
                    >
                        <img src={visible?hideBtn:showBtn}/>
                    </button>
                    
                    <input
                        onKeyDown={handleKeyDown}
                        type={!visible?"password":"text"}
                        placeholder="Password..."
                        value={userPass}
                        onChange={e=>setUserPass(e.target.value)}
                    />
                </div>
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