<script lang="ts">
    import { page } from "$app/stores";
    import moment from "moment";
</script>

<div class="todo-container">
    {#if $page.data?.user}
        <h1>Your todo list "{$page.data?.user.username}"</h1>
    {/if}
    <div class="todo-list">
        {#if $page.data?.todos?.object_list}
            {#each $page.data?.todos?.object_list as todo}
                <div class="todo" class:completed={todo.completed_at}>
                    <h3>{todo.title}</h3>
                    <div class="todo-wrap">
                        <small>
                            {todo.completed_at ? '✅' : ''} Created at
                            <strong title={todo.created_at}>
                                {moment(todo.created_at).fromNow()}
                            </strong>
                            by @{todo.user} and will be completed
                        <strong title={todo.will_be_completed_at}>
                            {moment(todo.will_be_completed_at).fromNow()}</strong>.
                        </small>
                        <a href="/{todo.id}/edit">Edit</a>
                    </div>
                    
                </div>
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
    }
    .todo a {
        color: #042847;
        text-decoration: none;
        margin-left: auto;
        font-size: 0.8rem;
    }

    .todo a:hover {
        text-decoration: underline;
    }

    .todo-wrap {
        display: flex;
        justify-content: space-between;
    }
</style>
