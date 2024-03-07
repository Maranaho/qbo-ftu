import { useQBOState } from '../context.jsx'

const SearchMatch = ({ text }) => {
    
    const { state:{ searchValue } } = useQBOState()
    const regex = new RegExp(`(${searchValue})`, 'gi')
    const parts = text.split(regex)
    const matched = parts.map((part, index) => {
        return (index % 2 === 0) ? part : (
            <span
                key={part + index + "highlight"} 
                className="highlight">{part}
                </span>
        )
    })
  
    return <span>{matched}</span>
  }
  
  export default SearchMatch