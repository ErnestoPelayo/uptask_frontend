import { useForm } from "react-hook-form"
import { ProjectClass, ProjectFormData } from "../../types"
import { Link, useNavigate } from "react-router-dom"
import ProjectForm from "../ProjectForm"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getUpdateProject } from "../../api/ProjectApi"
import { toast } from 'react-toastify'

type PropsEditProjectForm = {
  data: ProjectFormData,
  id: ProjectClass['_id']
}

const EditProjectForm = ({ data, id }: PropsEditProjectForm) => {

  const queryCliente = useQueryClient()

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      projectName: data.projectName,
      clientName: data.clientName,
      description: data.description
    }
  })

  const mutation = useMutation({
    mutationFn: getUpdateProject,
    onError: () => {
    },
    onSuccess: () => {
      toast.success("Se actualizo correctament")
      navigate('/')
      queryCliente.invalidateQueries({queryKey: ['editProject', id]})
      queryCliente.invalidateQueries({queryKey: ['projects']})
    }
  })


  const handleForm = (formData: ProjectFormData) => {
    mutation.mutate({
      id: id,
      formData: formData
    })
  }

  return (
    <div className="mt-10">
      <h1 className="text-5xl font-black"> Editar Proyecto </h1>
      <p className="text-2xl font-light text-gray-500 mt-5"> Actualiza la informacion de un proyecto </p>
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
            errors={errors}
          />

          <input
            type="submit" value="Guardar Cambios"
            className="py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 w-full text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>

    </div>

  )
}

export default EditProjectForm
