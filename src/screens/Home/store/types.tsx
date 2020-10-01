export type Task = {
    id: number,
    task: string,
    isCompleted: boolean;   
}
export interface TaskScreenStateProps{
    tasks: Array<Task>
}
  