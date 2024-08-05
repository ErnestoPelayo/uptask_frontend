import { Outlet } from "react-router-dom"
import Logo from "../components/Logo"


const AppLayout = () => {
  return (
    <div>
      <header className=" bg-gray-800 py-5">
        <div className=" max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64 ">
            <Logo />
          </div>
        </div>
      </header>
      <section className="max-w-screen-2xl mx-auto">
        <Outlet/>
      </section>
      <footer className="py-5">
        Año {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default AppLayout
