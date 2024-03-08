import RiveAnim from "./RiveAnim"
import spinner from "../assets/rive/spinner.riv"

const Loading = () => (
    <div className="Loading">
        <RiveAnim
            src={spinner}
            stateMachines="spinnerState"
            artboard="spinner"
        />
    </div>
)
 
export default Loading