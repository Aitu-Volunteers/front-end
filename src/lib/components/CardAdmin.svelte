<script>
    import Button from "./Button.svelte";

    export let value = 0;
    export let title = undefined;
</script>

<div class="card-wrapper">
    <div class="card-head">
        <span class="card-value">
            {value}
        </span>
        <span class="card-title">
            {title}
        </span>
    </div>
    <Button>
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-right: 10px;"
        >
            <path
                d="M2 14H14"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M3 9.00007L9.66667 2.3334C10.2189 1.78112 11.1144 1.78112 11.6667 2.3334C12.2189 2.88569 12.2189 3.78112 11.6667 4.3334L5 11.0001L2.33334 11.6667L3 9.00007Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        Редактировать
    </Button>
</div>

<style>
    .card-wrapper {
        box-shadow: var(--filterbox-shadow);
        display: flex;
        flex-direction: column;
        max-width: 256px;
        min-height: 122px;
        align-items: center;
        justify-content: center;
        border-radius: var(--border10);
        padding: 12px 28px;
    }
    .card-head {
        display: flex;
        align-items: center;
        margin: 0 0 8px;
    }
    .card-value {
        font-size: 2.5rem;
        font-weight: var(--semibold);
        color: var(--secondary-light);
    }
    .card-title {
        margin: 0 10px;
        color: var(--dark-gray);
    }
</style>
