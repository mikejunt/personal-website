export interface Project {
    _id?: any,
    title: string,
    code_url: string,
    proj_url?: string,
    summary: string,
    description: string,
    tags: string[],
    highlight: boolean
}