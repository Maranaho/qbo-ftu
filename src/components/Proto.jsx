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

  const routes = {
    "/": <Auth />,
    "/marketing": <Marketing />,
    "/signin": <Signin />,
    "/reasons": <Welcome />,
    "/track-money": <TrackMoney />,
    "/ownership": <Ownership />,
    "/source-of-income": <SourceOfIncome />,
    "/find-your-company": <FindCompany />,
    "/greeting/:user": <GreetingUser />,
    "/review-company-details": <DetailForm />,
    "/approved": <Approved />,
    "/bring-your-money": <BringYourMoney />,
    "/qbo": <QBO />,
    "*": <p>404</p>
  }
  
  
  const Proto = ()=>(
    <Routes>
      {Object.entries(routes).map(([path, Component]) => (
        <Route
          key={path}
          path={path}
          element={Component}
        />
      ))}
    </Routes>

  )
    export default Proto