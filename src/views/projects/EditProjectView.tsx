import { useQuery } from '@tanstack/react-query'
import { Navigate, useParams } from 'react-router-dom'
import { getProjectById } from '../../api/ProjectApi'

import EdifProjectForm from '../../components/Projects/EditProjectForm'

const EditProjectView = () => {

    const params = useParams()
    const idproject = params.id!

    const { data, isError,isLoading } = useQuery({
        queryKey: ['editProject', idproject],
        queryFn: () => getProjectById(idproject)
    })

  
    if(isError) return <Navigate to={'/404'}/>
    if(isLoading) return <p>cargando</p>
    if (data) return <EdifProjectForm id={idproject} data={data} />
}

export default EditProjectView
