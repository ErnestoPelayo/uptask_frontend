import { Link } from "react-router-dom"

const DashboardView = () => {
  return (
    <div className="mt-10 container mx-auto px-4">
      <h1 className="text-5xl font-black"> Mis Proyectos </h1>
      <p className="text-2xl font-light text-gray-500 mt-5"> Maneja y administra tus proyectos </p>
      <nav className="py-4">
        <Link
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xs font-bold cursor-pointer transition-colors"
          to={'/projects/create'}
        >
          Nuevo Proyecto
        </Link>
      </nav>
    </div>
  )
}

export default DashboardView
