import { useState } from "react"

const Checkbox = ({
    checked,
    onChange,
    label
}) => {

    const [timestamp] = useState(new Date().getTime())

    return (
        <div className="Checkbox">
            <input
                id={timestamp}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={timestamp}>{label}</label>
        </div>
    )
}
 
export default Checkbox