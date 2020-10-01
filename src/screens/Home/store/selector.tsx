import { StateProps } from "../../../globalStore/types";

export function getTodoList( stateProps: StateProps) {
    return stateProps.todoScreen.tasks
}
