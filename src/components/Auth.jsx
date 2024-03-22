import AuthPass from './AuthPass'
import qboImg from '../assets/png/qbo-profit.png'
const splineUrl = "https://prod.spline.design/EP-3N80ZQ8zwKWMK/scene.splinecode"

const Auth = () => (
    <div className="Auth">
        <AuthPass />
        <img src={qboImg} />
    </div>
)
 
export default Auth