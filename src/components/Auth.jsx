import Spline from '@splinetool/react-spline'
import AuthPass from './AuthPass'

const splineUrl = "https://prod.spline.design/EP-3N80ZQ8zwKWMK/scene.splinecode"

const Auth = () => (
    <div className="Auth">
        <AuthPass />
        <Spline scene={splineUrl} />
    </div>
)
 
export default Auth