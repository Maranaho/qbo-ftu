import { BrowserRouter } from "react-router-dom"
import { useQBOState } from './context.jsx'
import Loading from "./components/Loading.jsx"
import FetchingDetails from "./components/FetchingDetails.jsx"
import Proto from './components/Proto'

const App = ()=>{
  
  const { state:{ loading,fetchingDetails } } = useQBOState()

  return (
    <BrowserRouter>
      <Proto />
      {loading&&<Loading/>}
      {fetchingDetails&&<FetchingDetails/>}
    </BrowserRouter>
  )
}

export default App