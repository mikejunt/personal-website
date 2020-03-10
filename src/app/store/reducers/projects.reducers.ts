import { createReducer } from "@ngrx/store";
import { saveProjects, saveFeatures } from '../actions';
import { on } from '@ngrx/store'
import { Project } from 'src/app/interfaces/project.interface';

export interface ProjectState {
    all: Project[],
    features: Project[],
    
}


export const initialProjectState: ProjectState = {
        all: [],
        features: []
}



const projectreducer = createReducer(initialProjectState,
    on(saveProjects, (state, { projects }) => ({...state, all: projects})),
    on(saveFeatures, (state, { features }) => ({...state, features: features}))
);


export function projectReducer(state, action) {
    return projectreducer(state, action)
}