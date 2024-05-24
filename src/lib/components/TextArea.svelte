<script>
    export let inputName;
    export let name;
    export let required = false;
    export let type = "text";
</script>

<div>
    <label for="">
        {name}
        {#if required}
            <span>*</span>
        {/if}
    </label>
    <textarea {type} name={inputName} />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 30px 0 0 0;
    }

    textarea {
        border-radius: var(--border10);
        border: none;
        margin: 10px 0;
        padding: 8px 12px;
        background: var(--textinput-background);
        outline: none;
        height: 96px;
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
