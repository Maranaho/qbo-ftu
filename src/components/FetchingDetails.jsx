import RiveAnim from "./RiveAnim"
import progress from "../assets/rive/progress.riv"

const Loading = () => (
    <div className="Loading progress">
        <div>
            <span>Fetching your company’s information...</span>
            <RiveAnim
                src={progress}
                stateMachines="progress"
                artboard="progress"
            />
        </div>
    </div>
)
 
export default Loading