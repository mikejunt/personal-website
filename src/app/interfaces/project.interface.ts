export interface Project {
    _id?: any,
    title: string,
    code_url: string,
    proj_url?: string,
    img_url?: string,
    summary: string,
    description: string,
    tags: string[] | string,
    highlight: boolean,
    views?: number
}