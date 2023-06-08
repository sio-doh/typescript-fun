interface TodoItem {
    id: number
    title: string 
    status: TodoItemStatus
    completedOn?: Date 
}

enum TodoItemStatus {
    ToDo = "todo", 
    InProgress = "in-progress",
    Done = "done"
}

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: TodoItemStatus.Done, completedOn: new Date("2021-09-11") }, 
    { id: 2, title: "Learn TypeScript", status: TodoItemStatus.InProgress }, 
    { id: 3, title: "Write the best app in the world", status: TodoItemStatus.ToDo },
]

function addTodoItem(todo: string): TodoItem {
    const id = getNextId(todoItems)

    const newTodo = {
        id, 
        title: todo, 
        status: TodoItemStatus.ToDo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))