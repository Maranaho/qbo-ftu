import load from "../assets/svg/load.svg"

const LoadingCompanies = () => {

    const number = 9
    const arr = Array.from(Array(number).keys())
    return (
        <div className="LoadingCompanies">
            {arr.map(itm=>(
                <div key={itm}>
                    <img src={load}/>
                </div>
            ))}
        </div>
    )
}
export default LoadingCompanies