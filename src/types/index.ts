import {z} from 'zod'

export const projectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName:z.string(),
  description:z.string()
})

export const dashboardProjectSchema = z.array(
  projectSchema.pick(
    {
      _id : true,
      projectName:true,
      clientName:true,
      description:true
    }
  )
)
export type DashboarProject = z.infer<typeof dashboardProjectSchema>
export type ProjectClass = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<ProjectClass,'clientName' | 'projectName' | 'description'>
