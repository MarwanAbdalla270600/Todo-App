export interface Task {
    id: string,
    name: string, 
    status : 'todo' | 'done'
}

export type NewTask = Omit<Task, 'id'>;
