import { useRive } from '@rive-app/react-canvas-lite'
const RiveAnim = ({src,stateMachines,artboard,autoplay = true})=>{
    
    const { RiveComponent } = useRive({
        src,
        autoplay,
        stateMachines,
        artboard
    })

    return <RiveComponent className="riveComponent"/>
}
export default RiveAnim