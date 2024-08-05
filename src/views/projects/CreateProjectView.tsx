import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { ProjectClass } from "../../types"
import ErrorMessage from "../../components/ErrorMessage"


const CreateProjectView = () => {

  const initialValues: ProjectClass = {
    projectName: "",
    clientName: "",
    description: "",
  }

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleForm = (data: ProjectClass) => {
    console.log(data)
  }

  return (
    <div className="mt-10">
      <h1 className="text-5xl font-black"> Crear Proyecto </h1>
      <p className="text-2xl font-light text-gray-500 mt-5"> Lleba ek siguiente formulario para crear un proyecto </p>
      <nav className="py-4">
        <Link
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xs font-bold cursor-pointer transition-colors"
          to={'/'}
        >
          Volver a  Proyectos
        </Link>
      </nav>

      <div className=" lg:w-1/2">
        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <div className=" mb-5 space-y-3">
            <label htmlFor="projectName" className="text-sm uppercase font-bold">
              Nombre del Proyecto
            </label>
            <input
              type="text"
              id="projectName"
              className=" w-full p-3 via-orange-50 border-gray-200"
              {
              ...register("projectName", {
                required: "El titulo del proyecto es obligatorio"
              })
              }
            />
            {
              errors.projectName && (
                <ErrorMessage >{errors.projectName?.message} </ErrorMessage>
              )
            }
          </div>
          <div className=" mb-5 space-y-3">
            <label htmlFor="projectName" className="text-sm uppercase font-bold">
              Nombre del cliente 
            </label>
            <input
              type="text"
              id="clientName"
              className=" w-full p-3 via-orange-50 border-gray-200"
              {
              ...register("clientName", {
                required: "El nombre del cliente es obligatorio"
              })
              }
            />
            {
              errors.clientName && (
                <ErrorMessage >{errors.clientName?.message} </ErrorMessage>
              )
            }
          </div>
          <div className=" mb-5 space-y-3">
            <label htmlFor="projectName" className="text-sm uppercase font-bold">
              Descripción 
            </label>
            <input
              type="text"
              id="description"
              className=" w-full p-3 via-orange-50 border-gray-200"
              {
              ...register("description", {
                required: "La descripcion es obligatoria"
              })
              }
            />
            {
              errors.description && (
                <ErrorMessage >{errors.description?.message} </ErrorMessage>
              )
            }
          </div>
          <input
            type="submit" value="Crear Proyecto"
            className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>

    </div>
  )
}

export default CreateProjectView
