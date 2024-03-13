import { useState } from "react"
import { useLocalstorageState } from "rooks"
import Field from './Field'
import editBtn from '../assets/svg/edit.svg'
import tick from '../assets/svg/tick.svg'

const ReviewYourInfo = () => {

    const [selectedCompany] = useLocalstorageState("selectedCompany",null)
    const businessName = selectedCompany.director.split(" ")[0]
    const defaultEmail = `info@${businessName.toLowerCase()}-llp.com`
    const [userEmail,setUserEmail] = useLocalstorageState("userEmail",defaultEmail)
    const [userPhone,setUserPhone] = useLocalstorageState("userPhone","+44 7598 863677")
    const [editable,setEditable] = useState(false)

    const handleKeyDown = e =>{
        console.log(e.key);
        if(e.key === "Enter")setEditable(false)
    }

    return (
        <div className="ReviewYourInfo">
            <button
                className="edit"
                onClick={()=>setEditable(!editable)}
            >
                <img src={editable?tick:editBtn}/>
            </button>
            <h3>Review your info</h3>
            <article>
                <label>Business email</label>
                {editable?(
                    <Field
                        value={userEmail}
                        handleKeyDown={handleKeyDown}
                        onChange={e=>setUserEmail(e.target.value)}
                    />
                ):<span className="savedInfo">{userEmail}</span>}
            </article>
            <article>
                <label>Business phone number</label>
                {editable?(
                    <Field
                        value={userPhone}
                        handleKeyDown={handleKeyDown}
                        onChange={e=>setUserPhone(e.target.value)}
                    />
                ):<span className="savedInfo">{userPhone}</span>}
            </article>
        </div>
    )
}
 
export default ReviewYourInfo