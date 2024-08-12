import { isAxiosError } from "axios";
import api from "../lib/axios";
import { dashboardProjectSchema, ProjectClass, ProjectFormData, projectSchema } from "../types";

export async function createProject(formData: ProjectFormData) {
    try {
        const {data} = await api.post('/projects',formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProjects() {
    try {
        const {data} = await api.get('/projects')
        const response =dashboardProjectSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}


export async function getProjectById(id:ProjectClass['_id']) {
    try {
        const {data} = await api.get(`/projects/${id}`)
        const response =projectSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}


type PropsUpdateProject = {
    id:ProjectClass['_id'],
    formData: ProjectFormData
}

export async function getUpdateProject({id,formData}:PropsUpdateProject) {
    try {
        const {data} = await api.put(`/projects/${id}`,formData)
        const response =projectSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}