const Field = ({
    label,
    value,
    placeholder,
    helperText,
    onChange,
    width
}) => {
    return (
        <article
            className="Field"
            style={{width}}
        >
            {label&&<label>{label}</label>}
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {helperText&&<span>{helperText}</span>}
        </article>
    )
}
 
export default Field