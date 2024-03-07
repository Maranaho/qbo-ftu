import {
    Route,
    Routes
  } from "react-router-dom"
  import Demo from './Demo'
  import DetailForm from './DetailForm'
  import GreetingUser from './GreetingUser'
  
  const Proto = ()=>{
  
    return (
          
      <Routes>
        <Route path="/" element={<Demo/>}/>
        <Route path="/greeting/:user" element={<GreetingUser/>}/>
        <Route path="/review-company-details" element={<DetailForm/>}/>
        <Route path='*' element={<p>404</p>} />
      </Routes>
        
    )
  }
    export default Proto