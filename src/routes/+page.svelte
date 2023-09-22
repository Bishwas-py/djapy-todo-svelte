<script lang="ts">
    import {page} from "$app/stores";
    import moment from "moment";
</script>

<div class="todo-container">
    {#if $page.data?.user}
        <h1>Todo list for {$page.data?.user.username}</h1>
    {/if}
    <div class="todo-list">
        {#if $page.data?.todos?.object_list}
            {#each $page.data?.todos?.object_list as todo}
                <div class="todo">
                    <div class="todo-header">
                        <h3>{todo.title}</h3>
                        <small>Created at {moment(todo.created_at).fromNow()} by @{todo.user} and
                        will be completed at {moment(todo.will_be_completed_at).fromNow()}.
                        </small>
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
        gap: 0.5rem;
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: 1px solid #e0eaee;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .todo-header {
        display: flex;
        flex-direction: column;
    }

    .todo-header h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
    }


</style>