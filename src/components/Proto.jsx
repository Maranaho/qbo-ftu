import {
    Route,
    Routes
  } from "react-router-dom"
  import Welcome from './Welcome'
  import FindCompany from './FindCompany'
  import TrackMoney from './TrackMoney'
  import Ownership from './Ownership'
  import SourceOfIncome from './SourceOfIncome'
  import DetailForm from './DetailForm'
  import GreetingUser from './GreetingUser'
  import Approved from './Approved'
  import BringYourMoney from './BringYourMoney'
  import QBO from './QBO'
  import Signin from './Signin'
  import Marketing from './Marketing'
  import Auth from './Auth'
  
  const Proto = ()=>(
    <Routes>
      <Route path="/" element={<Auth/>}/>
      <Route path="/marketing" element={<Marketing/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/reasons" element={<Welcome/>}/>
      <Route path="/track-money" element={<TrackMoney/>}/>
      <Route path="/ownership" element={<Ownership/>}/>
      <Route path="/source-of-income" element={<SourceOfIncome/>}/>
      <Route path="/find-your-company" element={<FindCompany/>}/>
      <Route path="/greeting/:user" element={<GreetingUser/>}/>
      <Route path="/review-company-details" element={<DetailForm/>}/>
      <Route path="/approved" element={<Approved/>}/>
      <Route path="/bring-your-money" element={<BringYourMoney/>}/>
      <Route path="/qbo" element={<QBO/>}/>
      <Route path='*' element={<p>404</p>} />
    </Routes>
  )
    export default Proto