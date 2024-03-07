import { BrowserRouter } from "react-router-dom"
import { useQBOState } from './context.jsx'
import Loading from "./components/Loading.jsx"
import Proto from './components/Proto'

const App = ()=>{
  
  const { state:{ loading } } = useQBOState()
  return (
    <BrowserRouter>
        <Proto />
  
    {loading&&<Loading/>}
    </BrowserRouter>
  )
}

export default App