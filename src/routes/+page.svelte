<script lang="ts">
    import {enhance} from "$app/forms";
    import {page} from "$app/stores";
    import moment from "moment";
</script>

<div class="todo-container">
    {#if $page.data?.user}
        <h1>Your todo list "{$page.data?.user.username}"</h1>
    {/if}
    <div class="todo-list">
        {#if $page.data?.todos?.object_list}
            {#each $page.data.todos?.object_list as todo}
                <form class="todo" class:completed={todo.completed_at} action="" method="post"
                      use:enhance>
                    <h3>{todo.title}</h3>
                    <div class="todo-wrap">
                        <input type="hidden" name="todoID" value={todo.id}/>
                        <small>
                            {todo.completed_at ? '✅' : '⌛'}
                            {#if todo.completed_at && moment(todo.completed_at).isBefore(todo.will_be_completed_at)}
                                Completed <strong>{moment(todo.will_be_completed_at).from(todo.completed_at, true)} early</strong>.
                            {:else if todo.completed_at}
                                Completed <strong>{moment(todo.completed_at).from(todo.will_be_completed_at, true)} late</strong>.
                            {:else}
                                Due <strong>{moment(todo.will_be_completed_at).fromNow()}</strong>.
                            {/if}
                        </small>

                        <div class="todo-action">
                            <a href="/{todo.id}/edit">Edit</a>
                            <button formaction="?/markAs">
                                {todo.completed_at ? 'Mark as Uncompleted' : 'Mark as Completed'}
                            </button>
                            <input name="markAs" value="{todo.completed_at ? 'uncompleted': 'completed'}" hidden>
                        </div>
                    </div>
                </form>
            {/each}
        {/if}
    </div>
</div>

<style lang="postcss">
    .todo-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .todo-list {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .todo {
        display: flex;
        flex-direction: column;
        gap: 0;
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: 1px solid #e0eaee;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .todo.completed {
        background-color: #f0f7f9;
        border: 1px solid #c8dce1;
    }

    .todo h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: rgb(44, 48, 51);
        margin: 0;
    }

    .todo small {
        font-size: 0.8rem;
        color: #061624;
        max-width: 70%;
    }

    .todo-action a, .todo-action button {
        color: #042847;
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: bold;
        padding: 0;
        border: none;
        background-color: transparent;
        margin: 0;
        cursor: pointer;
    }

    .todo-action a {
    }

    .todo-action a:hover, .todo-action button:hover {
        text-decoration: underline;
        color: #1d5788;
    }

    .todo a:hover {
        text-decoration: underline;
    }

    .todo-action {
        display: flex;
        align-items: end;
        justify-content: space-between;
        border-bottom: 1px solid #e0eaee;
    }

    .todo-wrap {
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 1rem;
        }
    }


    .todo-action {
        display: flex;
        gap: 1rem;

        @media (max-width: 768px) {
            justify-content: space-between;
        }
    }
</style>
