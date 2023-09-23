
export interface LoginResponse {
    session_key: string,
    is_authenticated: boolean,
    expiry_age: number,
    csrf_token: string,
    id: string
}


export interface User {
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    is_authenticated: boolean,
    id: number
}

export interface Todo {
    id: number,
    title: string,
    will_be_completed_at: string
    completed_at: string,
    created_at: string,
    updated_at: string
}

export interface TodoResponse {
    object_list: Todo[],
    previous_page_number: number,
    next_page_number: number,
}