import { BrowserRouter } from "react-router-dom"
import { useQBOState } from './context.jsx'
import Loading from "./components/Loading.jsx"
import FetchingDetails from "./components/FetchingDetails.jsx"
import Proto from './components/Proto'
import Progress from './components/Progress'

const App = ()=>{
  
  const { state:{ loading,fetchingDetails,routeProgress } } = useQBOState()
  return (
    <BrowserRouter>
      {routeProgress && routeProgress !== "/qbo" &&<Progress />}
      <Proto />
      {loading&&<Loading/>}
      {fetchingDetails&&<FetchingDetails/>}
    </BrowserRouter>
  )
}

export default App