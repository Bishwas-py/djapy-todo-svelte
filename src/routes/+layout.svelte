<script>
    import "../app.css";
    import {page} from "$app/stores";
</script>

<div>
    <nav>
        <a class="logo" href="/">Djapy 📃</a>
        <ul>
            <li>
                <a href="/">Todos</a>
            </li>
            <li class="action" class:active={$page.url.pathname === '/create'}>
                <a href="/create">Create Todo</a>
            </li>
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
        background-color: #333;
        padding: 0.5rem 1rem;
        border-radius: 5rem;
    }

    .action a {
        color: #fff;
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