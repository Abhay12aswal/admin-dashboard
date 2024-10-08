import { lazy, Suspense } from "react"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Loader from "./components/Loader";

const Dashboard = lazy(()=> import("./pages/dashboard")); 
const Customers= lazy(()=> import("./pages/Customers")); 
const  Products= lazy(()=> import("./pages/Products")); 
const Transcation= lazy(()=> import("./pages/Transcation")); 

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard"  element={<Dashboard/>}/>
        <Route path="/admin/products"  element={<Products/>}/>
        <Route path="/admin/transcation"  element={<Transcation/>}/>
        <Route path="/admin/customer"  element={<Customers/>}/>

        {/* Charts */}


        {/* Apps */}

        
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
