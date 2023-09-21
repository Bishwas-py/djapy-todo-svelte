<div class="todo-container">
    <div class="todo-list">
        <div class="todo">
            <div class="todo-header">
                <h3>Todo title for specific {'title'}</h3>
                <small>Created at {'created_at ago'} by @{'username'}</small>
            </div>
        </div>
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