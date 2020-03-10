import { AppState } from '..';

export const viewFeatures = (state: AppState) => state.projects.features;
export const viewAllProjects = (state: AppState) => state.projects.all;
export const viewCurrentProject = (state: AppState) => state.users.current;
export const viewProjectHistory = (state: AppState) => state.users.history;
export const viewAdminUser = (state: AppState) => state.users.isAdmin;