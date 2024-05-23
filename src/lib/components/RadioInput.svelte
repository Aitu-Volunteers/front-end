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

    <div class="row">
        <input type="radio" name="gender" value="Male" id="male" />
        <label for="male" class="radio-text">Мужской</label>
        <input type="radio" name="gender" value="Female" id="female" />
        <label for="female" class="radio-text female">Женский</label>
    </div>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 256px;
        margin: 30px 0 0 0;
    }

    input {
        border-radius: var(--border10);
        border: none;
        margin: 10px 0;
        padding: 8px 12px;
        background: var(--textinput-background);
        accent-color: var(--secondary);
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

    .row {
        margin: 16px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .radio-text {
        font-weight: normal;
    }
</style>
