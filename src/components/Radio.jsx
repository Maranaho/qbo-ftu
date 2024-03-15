
const Radio = ({
    options,
    setOptions,
    name,
    className
}) => {

    const handleChange = idx =>{
        const tmpOptions = [...options].map((option,optIdx)=>{
            if(optIdx === idx)option.value = true
            else option.value = false
            return option
        })
        setOptions(tmpOptions)
    }

    return (
        <div className={`RadioGroup ${className}`}>
            {options.map((option,idx)=>{
                const { value,label } = option
                return (
                    <div className="Radio" key={`radio${idx}`}>
                        <input
                            id={`radio${idx}`}
                            name={name}
                            type="radio"
                            checked={value}
                            onChange={()=>handleChange(idx)}
                        />
                        <label htmlFor={`radio${idx}`}>{label}</label>
                    </div>
                )
                })}
        </div>
    )
}
 
export default Radio