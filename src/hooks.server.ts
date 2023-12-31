import {SECRET_BASE_API} from '$env/static/private';
import type {Handle, HandleFetch} from '@sveltejs/kit';

export const handleFetch: HandleFetch = async ({request, fetch}) => {
    if (request.url.includes('$api/')) {
        let requestUrl = request.url.split('$api/')[1];
        requestUrl = `${SECRET_BASE_API}/${requestUrl}`;

        let options: any = {
            method: request.method,
            headers: request.headers,
            cache: request.cache,
            credentials: request.credentials,
            mode: request.mode,
            referrer: request.referrer,
            referrerPolicy: request.referrerPolicy,
            integrity: request.integrity,
            keepalive: request.keepalive,
            signal: request.signal,
            redirect: request.redirect
        };

        const isBodyAllowed = request.method === 'POST'
            || request.method === 'PUT'
            || request.method === 'PATCH';

        if (isBodyAllowed) {
            options = {
                ...options,
                body: await request.text()
            };
        }

        return fetch(requestUrl, options);
    }
    return fetch(request);
};

export const handle = (async ({event, resolve}) => {
    event.locals.sessionID = event.cookies.get("sessionID") as string;
    event.locals.preparedCookie = `sessionid=${event.locals.sessionID};`;

    const userResponse = await event.fetch(`$api/get-user/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": event.locals.preparedCookie
        }
    });
    const user = await userResponse.json();
    if (user.id) {
        event.locals.user = user;
    }
    return resolve(event);
}) satisfies Handle;

