import tech from "../assets/svg/tech.svg"

const NoResult = () => (
    <div className="NoResult">
        <img src={tech} />
        <h3>We can't find your company.</h3>
        <p>You can search using your company number, zipcode, address, directors...</p>
    </div>
)
export default NoResult