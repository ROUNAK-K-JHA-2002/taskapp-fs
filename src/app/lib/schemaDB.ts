import { UUID } from "crypto";
import Dexie from "dexie";



interface Task {
    id: UUID
    created_at: string
    is_complete: boolean | null
    task: string | null
    description: string | null
    tag: string | null
}


const db = new Dexie("TaskListDB") as Dexie & {
    tasks: Dexie.Table<Task, UUID>;
};

db.version(1).stores({
    tasks: "++id, created_at, is_complete, task, description, tag"
})

export default db;
export type { Task };