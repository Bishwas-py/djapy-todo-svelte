import type {Actions} from './$types';
import {fail, redirect} from "@sveltejs/kit";
import type {LoginResponse} from "$lib/interfaces";

export const actions = {
    default: async ({request, cookies, fetch}) => {
        const data = await request.formData();
        const username = data.get("username") as string;
        const password = data.get("password") as string;

        const loginResponse = await fetch(`$api/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        })

        const loginData = await loginResponse.json() as LoginResponse;

        if (loginData.session_key && loginData.is_authenticated) {
            cookies.set("sessionID", loginData.session_key, {
                path: "/",
                maxAge: loginData.expiry_age
            })
            cookies.set("userID", loginData.id, {
                path: "/",
                maxAge: loginData.expiry_age,
            })
            throw redirect(302, "/");
        } else {
            return fail(400, {
                error: "Invalid username or password"
            });
        }
    }
} satisfies Actions;