import { useLocalstorageState } from "rooks"
import Radio from "./Radio"

const defaultIncomeSource = [
    {label:"Yes",value:false},
    {label:"No",value:false}
]

const MainIncomeSource = ({idx})=>{
    const [mainIncomeSrc,setMainIncomeSrc] = useLocalstorageState("mainIncomeSrc",defaultIncomeSource)
    return (
        <Radio
            className="MainIncomeSource"
            name="isMainIncomeSrc"
            setOptions={setMainIncomeSrc}
            options={mainIncomeSrc}
        />
    )
}

export default MainIncomeSource