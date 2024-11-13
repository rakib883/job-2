import AddBanner from "./component/AddBanner"
import Branding from "./component/Branding"
import Budget from "./component/Budget"
import Foter from "./component/Foter"
import Header from "./component/Header"
import Services from "./component/Services"
import Steps from "./component/Steps"

function App() {
  return (
      <div className="main bg-[#F2F2F7]">
         <Header/>
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
