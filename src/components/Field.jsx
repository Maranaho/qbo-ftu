import { useRef } from "react"

const Field = ({
    label,
    value,
    placeholder,
    helperText,
    onChange,
    width,
    handleKeyDown
}) => {

    const inputRef = useRef(null)
    const handleFocus = () =>{
        if(inputRef.current) inputRef.current.select()
    }

    return (
        <article
            className="Field"
            style={{width}}
        >
            {label&&<label>{label}</label>}
            <input
                ref={inputRef}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
            />
            {helperText&&<span>{helperText}</span>}
        </article>
    )
}
 
export default Field