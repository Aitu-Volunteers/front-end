<script>
    export let name;
    export let required = false;

    export let items;
</script>

<div>
    <label for="">
        {name}
        {#if required}
            <span>*</span>
        {/if}
    </label>

    <select name="" id="">
        <option value="none" selected disabled hidden>Выбрать</option>

        {#each items as item}
            <option value={item}>
                {item}
            </option>
        {/each}
    </select>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 256px;
        margin: 30px 10px;
    }

    select {
        border-radius: var(--border10);
        border: none;
        margin: 10px 0;
        padding: 8px 12px;
        background: var(--textinput-background);
        text-align: center;
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
