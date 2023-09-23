<script>
    import "../app.css";
    import {page} from "$app/stores";
</script>

<svelte:head>
    {#if $page.data.user.username}
        <title>Todo list by @{$page.data.user.username}</title>
    {:else}
        <title>Todo list</title>
    {/if}
</svelte:head>
<div>
    <nav>
        <a class="logo" href="/">
            {#if $page.data.user}
                @{$page.data.user.username}
            {:else}
                Djapy 📃
            {/if}
        </a>
        <ul>
            <li>
                <a href="/">Todos</a>
            </li>
            <li class="action primary" class:active={$page.url.pathname === '/create'}>
                <a href="/create">Create Todo</a>
            </li>
            {#if $page.data.user}
                <li class="action secondary">
                    <a href="/auth/logout">Logout</a>
                </li>
            {:else}
                <li class="action secondary">
                    <a href="/auth/login">Login</a>
                </li>
            {/if}
        </ul>
    </nav>

    <div style="padding: 0 1rem;">
        <slot/>
    </div>
</div>

<style lang="postcss">
    nav {
        display: flex;
        margin-bottom: 2rem;
        justify-content: space-between;
        align-items: center;
        padding: 0.2rem 2rem;
        border-radius: 5rem;
        border: 1px solid #e0eaee;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-top: 2rem;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        color: #333;
        display: flex;
        align-items: center;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 1rem;
        align-items: center;
    }

    li {
        font-size: 1.2rem;
    }

    li a {
        text-decoration: none;
        color: #333;
    }

    li a:hover {
        text-decoration: underline;
    }

    .action {
        padding: 0.5rem 1rem;
        border-radius: 5rem;
    }

    .action.primary {
        background-color: #333;
    }

    .action.secondary {
        outline: 1px solid #333;
        text-decoration: none;
    }

    .action.primary a {
        color: #fff;
    }

    .action.secondary a {
        color: #333;
    }

    .action a:hover {
        text-decoration: none;
    }

    .action a:active {
        color: #fff;
    }

    .action.active {
        background-color: #2a2121;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }

    div {
        color: #333;
        font-family: sans-serif;
        max-width: 55rem;
        margin: 0 auto;
    }
</style>