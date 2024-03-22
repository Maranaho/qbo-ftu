import Spline from '@splinetool/react-spline'
import AuthPass from './AuthPass'

const splineUrl = "https://prod.spline.design/EP-3N80ZQ8zwKWMK/scene.splinecode"

const AuthSpline = () => (
    <div className="Auth AuthSpline">
        <AuthPass />
        <Spline scene={splineUrl} />
    </div>
)
 
export default AuthSpline