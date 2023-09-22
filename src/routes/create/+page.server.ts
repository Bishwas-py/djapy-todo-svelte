import type {Actions} from './$types';
import {fail, redirect} from "@sveltejs/kit";
import type {LoginResponse} from "$lib/interfaces";

export const actions = {
    default: async ({request, cookies, fetch, locals}) => {
        const data = await request.formData();
        const title = data.get("title") as string;
        const will_be_completed_at = data.get("will_be_completed_at") as string;
        console.log(will_be_completed_at)
        const response = await fetch(`$api/todos/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": locals.preparedCookie
            },
            body: JSON.stringify({title, will_be_completed_at})
        })

        const createdTodoJson = await response.json();

        if (createdTodoJson.id) {
            throw redirect(302, "/");
        }

        return fail(400, createdTodoJson);

    }
} satisfies Actions;