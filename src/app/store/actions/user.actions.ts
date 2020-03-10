import { createAction, props } from '@ngrx/store';



export const setViewedProject = createAction(
    '[USER TRACKING] Set Current Viewed Project',
    props<{project: string}>()
)

export const setAdminUser = createAction(
    '[USER TRACKING] Set Admin State')