
import load from "../assets/svg/load.svg"

const Loading = () => {

    const number = 9
    const arr = Array.from(Array(number).keys())
    return (
        <div className="Loading">
            {arr.map(itm=>(
                <div key={itm}>
                    <img src={load}/>
                </div>
            ))}
        </div>
    )
}
export default Loading