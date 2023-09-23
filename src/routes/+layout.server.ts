import type { LayoutServerLoad } from './$types';
import type {TodoResponse} from "$lib/interfaces";

export const load: LayoutServerLoad = async ({ locals, fetch }) => {
    const todosResponse = await fetch(`$api/todos/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": locals.preparedCookie
        }
    })

    const todos: TodoResponse = await todosResponse.json();
    return {
        user: locals.user,
        todos
    };
};