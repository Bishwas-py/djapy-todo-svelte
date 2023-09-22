import type { LayoutServerLoad } from './$types';
import type {Todo} from "$lib/interfaces";

export const load: LayoutServerLoad = async ({ locals, fetch }) => {
    const todosResponse = await fetch(`$api/todos/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": locals.preparedCookie
        }
    })

    const todos: Todo[] = await todosResponse.json();
    return {
        user: locals.user,
        todos
    };
};