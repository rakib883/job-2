import AddBanner from "./component/AddBanner"
import Branding from "./component/Branding"
import Budget from "./component/Budget"
import Foter from "./component/Foter"
import Header from "./component/Header"
import MobileSearch from "./component/MobileSearch"
import Services from "./component/Services"
import Steps from "./component/Steps"

function App() {
  return (
      <div className="main  sm:bg-white font-inter">
         <Header/>
         <div className="main">
            <MobileSearch/>
         </div>
         <Branding/>
         <Steps/>
         <Services/>
         <AddBanner/>
         <Budget/>
         <Foter/>
      </div>
  )
}

export default App
