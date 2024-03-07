import {
    Route,
    Routes
  } from "react-router-dom"
  import Demo from './Demo'
  
  const Proto = ()=>{
  
    return (
          
      <Routes>
        <Route path='*' element={<p>404</p>} />
        <Route path="/" element={<Demo/>}/>
      </Routes>
        
    )
  }
    export default Proto