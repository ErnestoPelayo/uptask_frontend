import {z} from 'zod'

export const projectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName:z.string(),
  description:z.string()
})

export type ProjectClass = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<ProjectClass,'clientName' | 'projectName' | 'description'>

/*

export type ProjectClass = {
    projectName:string,
      clientName:string,
      description:string,
}
      */