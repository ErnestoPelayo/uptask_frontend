import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { ProjectClass, ProjectFormData } from "../../types"
import ErrorMessage from "../../components/ErrorMessage"
import ProjectForm from "../../components/ProjectForm"


const CreateProjectView = () => {

  const initialValues: ProjectFormData = {
    projectName: "",
    clientName: "",
    description: "",
  }

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleForm = (data: ProjectFormData) => {
    console.log(data)
  }

  return (
    <div className="mt-10">
      <h1 className="text-5xl font-black"> Crear Proyecto </h1>
      <p className="text-2xl font-light text-gray-500 mt-5"> Llena el siguiente formulario para crear un proyecto </p>
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
          <ProjectForm 
            register={register}
            errors ={errors}
          />
          
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
