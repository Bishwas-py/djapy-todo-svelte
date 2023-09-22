import {redirect} from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url, locals, cookies }) => {
    cookies.delete("sessionID", {
        path: "/",
    })
    cookies.delete("userID", {
        path: "/",
    })
    throw redirect(302, "/")
};