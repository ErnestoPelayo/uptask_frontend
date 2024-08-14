import { useQuery } from '@tanstack/react-query'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getProjectById } from '../../api/ProjectApi'

const DetailProjectView = () => {

  const params = useParams()
  const idproject = params.id!
  const navigate = useNavigate()

  const { data, isError, isLoading } = useQuery({
    queryKey: ['editProject', idproject],
    queryFn: () => getProjectById(idproject)
  })


  if (isError) return <Navigate to={'/404'} />
  if (isLoading) return <p>cargando</p>
  if (data) return (
    <div className='py-10'>
      <h1 className='text-5xl font-black'>{data.projectName}</h1>
      <p className='text-2xl font-light text-gray-500 mt-5'>{data.description}</p>
      <nav className='my-5 flex gap-3'>
        <button
          type='button'
          className='bg-purple-400 hover:bg-purple-500 
                      px-10 py-3 text-white text-xl font-bold 
                      cursor-pointer transition-colors'
        onClick={()=>navigate('?newTask=True')}
        >
        Agregar Tarea
        </button>
      </nav>
    </div>
  )
}

export default DetailProjectView
