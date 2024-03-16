import { useLocalstorageState } from "rooks"
import NavButton from "./NavButton"
import MainIncomeSource from './MainIncomeSource'
const defaultIncomeSource = [
    {label:"Yes",value:false},
    {label:"No",value:false}
]

const SourceOfIncome = () => {
 
    const [mainIncomeSrc] = useLocalstorageState("mainIncomeSrc",defaultIncomeSource)
    return (
        <div className="Survey SourceOfIncome">
            <h1>Is this business your main source of income?</h1>
            <h2>We'll use this info to get you started.</h2>
            <MainIncomeSource />
            <div className="btnCtn">
                <NavButton
                    label="Back"
                    variant="secondary"
                    url="/ownership"
                />
                <NavButton
                    label="Next"
                    url="/find-your-company"
                    disabled={!mainIncomeSrc.filter(src=>src.value).length}
                />
            </div>
        </div>
    )
}
 
export default SourceOfIncome