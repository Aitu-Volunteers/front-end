<script>
    export let name;
    export let required = false;
</script>

<div>
    <label for="">
        {name}
        {#if required}
            <span>*</span>
        {/if}
    </label>
    <input type="text" {required} />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        width: 256px;
        max-width: 256px;
        margin: 30px 0 0 0;
    }

    input {
        border-radius: var(--border10);
        border: none;
        margin: 10px 0;
        padding: 8px 12px;
        background: var(--textinput-background);
        outline: none;
    }

    span {
        color: red;
    }

    label {
        color: var(--dark-gray);
        font-weight: var(--semibold);
        margin: 0 10px;
    }
</style>
