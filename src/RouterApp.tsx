import { BrowserRouter,Routes,Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import DashboardView from "./views/DashboardView"
import CreateProjectView from "./views/projects/CreateProjectView"
import EditProjectView from "./views/projects/EditProjectView"


const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<DashboardView/>} index></Route>
                <Route path="/projects/create" element={<CreateProjectView/>}></Route>
                <Route path="/projects/:id/edit" element={<EditProjectView/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
