<script lang="ts">
    import {page} from "$app/stores";
</script>

<h1>Create your todos.</h1>
<form action="" method="post">
    {#if $page.form}
        {#each $page.form as error}
            <div class="error">
                {error.message}
            </div>
        {/each}
    {/if}

    <div class="input-group">
        <label for="title">Todo title</label>
        <input id="title" name="title" type="text" placeholder="Title">
    </div>
    <div class="input-group">
        <label for="will_be_completed_at">Will be completed at</label>
        <input id="will_be_completed_at" name="will_be_completed_at"
               type="datetime-local" class="form-control"
               placeholder="Will be completed at">
    </div>
    <button type="submit" class="super-button">Submit</button>
</form>

<style lang="postcss">
    form {
        width: 100%;
        margin: 0 auto;
    }
</style>