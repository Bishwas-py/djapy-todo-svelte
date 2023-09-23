import type {Actions} from './$types';
import type {Todo} from "$lib/interfaces";

export const actions = {
    markAs: async ({request, cookies, fetch, locals}) => {
        const data = await request.formData();
        const todoID = data.get("todoID") as string;
        const markAs = data.get("markAs")
        let completedAt: string | null;

        if (markAs === "completed") {
            completedAt = new Date().toISOString();
        } else {
            completedAt = null;
        }

        const response = await fetch(`$api/todos/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Cookie": locals.preparedCookie
            },
            body: JSON.stringify({
                id: todoID,
                completed_at: completedAt
            })
        })
        const createdTodoJson: Todo = await response.json();
        return createdTodoJson;
    }
} satisfies Actions;