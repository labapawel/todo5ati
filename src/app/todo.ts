export interface Todo {
    id: number;
    status: number,
    priority: number,
    name: string,
    description: string,
    createDate?: Date,
    dueDate?: Date,
    position: number,
    active: boolean
}