import { useLocalstorageState } from "rooks"
import Field from "./Field"
import NavButton from "./NavButton"

const SigninForm = () => {
    const [userEmail,setUserEmail] = useLocalstorageState("userEmail","")
    const [userPhone,setUserPhone] = useLocalstorageState("userPhone","")
    const [userPassword,setUserPassword] = useLocalstorageState("userPassword","")
    return (
        <div className="SigninForm">
            <h1>Create an Intuit Account</h1>
            <p>One account connected to everything Intuit, including QuickBooks.</p>
            <p>Already have an account? <span className="link">Sign in</span></p>
            <Field
                label="Email"
                value={userEmail}
                onChange={e=>setUserEmail(e.target.value)}
            />
            <Field
                label="Phone"
                value={userPhone}
                onChange={e=>setUserPhone(e.target.value)}
                helperText="Standard call, message, or data rates may apply."
            />
            <Field
                label="Password"
                password
                value={userPassword}
                onChange={e=>setUserPassword(e.target.value)}
            />
            <div className="formFooter">
                <NavButton
                    label="One more step"
                    url="/reasons"
                />
                <p>By selecting One more step you are agreeing to our <span className="link">Terms</span> and acknowledge our <span className="link">Privacy Statement</span>.</p>
                <small>Invisible reCAPTCHA by Google <span className="link">Privacy Policy</span> and <span className="link">Terms of use</span></small>.
            </div>
        </div>
    )
}
 
export default SigninForm