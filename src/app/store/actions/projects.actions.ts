import { createAction, props } from '@ngrx/store';
import { Project } from 'src/app/interfaces/project.interface';



export const saveProjects = createAction(
    '[GET PROJECT DATA] Save All Projects',
    props<{projects: Project[]}>()
)

export const saveFeatures = createAction(
    '[GET PROJECT DATA] Save Feature projects',
    props<{features: Project[]}>()
)
