import {
    Route,
    Routes
  } from "react-router-dom"
  import FindCompany from './FindCompany'
  import DetailForm from './DetailForm'
  import GreetingUser from './GreetingUser'
  
  const Proto = ()=>(
    <Routes>
      <Route path="/" element={<FindCompany/>}/>
      <Route path="/greeting/:user" element={<GreetingUser/>}/>
      <Route path="/review-company-details" element={<DetailForm/>}/>
      <Route path='*' element={<p>404</p>} />
    </Routes>
  )
    export default Proto