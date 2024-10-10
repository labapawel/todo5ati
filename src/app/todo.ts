export interface Todo {
    status: number,
    priority: number,
    name: string,
    description: string,
    createDate?: Date,
    dueDate?: Date,
    position: number
}