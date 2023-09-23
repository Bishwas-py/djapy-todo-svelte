import type {Actions, PageServerLoad} from './$types';
import type {Todo} from "$lib/interfaces";

export const load: PageServerLoad = async ({params, locals, fetch}) => {
    const todoId = params.todoId;
    const todosResponse = await fetch(`$api/todos/${todoId}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": locals.preparedCookie
        }
    })

    const todo: Todo = await todosResponse.json();
    return {
        todo
    };
};

export const actions = {
    default: async ({request, cookies, fetch, locals, params}) => {
        const data = await request.formData();
        const todoID = params.todoId;

        const title = data.get("title") as string;

        const completedAtString = data.get("completed_at") as string;
        const completedAt = completedAtString === "" ? null : new Date(completedAtString).toISOString();

        const willBeCompletedAtString = data.get("will_be_completed_at") as string;
        const willBeCompletedAt = willBeCompletedAtString === "" ? null : new Date(willBeCompletedAtString).toISOString();

        const response = await fetch(`$api/todos/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Cookie": locals.preparedCookie
            },
            body: JSON.stringify({
                id: todoID,
                title,
                completed_at: completedAt,
                will_be_completed_at: willBeCompletedAt
            })
        })
        const createdTodoJson: Todo = await response.json();
        return {
            todo: createdTodoJson
        };
    }
} satisfies Actions;