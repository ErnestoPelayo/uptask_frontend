import { BrowserRouter,Routes,Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import DashboardView from "./views/DashboardView"


const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<DashboardView/>} index></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
