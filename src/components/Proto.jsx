import {
    Route,
    Routes
  } from "react-router-dom"
  import Welcome from './Welcome'
  import FindCompany from './FindCompany'
  import DetailForm from './DetailForm'
  import GreetingUser from './GreetingUser'
  import Approved from './Approved'
  import BringYourMoney from './BringYourMoney'
  import QBO from './QBO'
  
  const Proto = ()=>(
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/fond-your-company" element={<FindCompany/>}/>
      <Route path="/greeting/:user" element={<GreetingUser/>}/>
      <Route path="/review-company-details" element={<DetailForm/>}/>
      <Route path="/approved" element={<Approved/>}/>
      <Route path="/bring-your-money" element={<BringYourMoney/>}/>
      <Route path="/qbo" element={<QBO/>}/>
      <Route path='*' element={<p>404</p>} />
    </Routes>
  )
    export default Proto