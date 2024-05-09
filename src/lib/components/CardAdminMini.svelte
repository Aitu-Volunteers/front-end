<script>
    export let value = 0;
    export let title = undefined;
    export let color = 0;

    const colors = ["black", "main", "secondary", "blue"];
</script>

<div class="card-wrapper">
    <div class="card-value {colors[color]}">
        {value}
    </div>
    <div class="card-title">
        {title}
    </div>
</div>

<style>
    .card-wrapper {
        box-shadow: var(--filterbox-shadow);
        display: flex;
        flex-direction: column;
        max-width: 128px;
        min-height: 100px;
        align-items: center;
        justify-content: center;
        border-radius: var(--border10);
    }
    .card-value {
        font-size: 1.75rem;
        font-weight: var(--semibold);
    }
    .card-title {
        margin: 10px 0 0;
        text-align: center;
    }

    .main {
        color: var(--main);
    }

    .secondary {
        color: var(--secondary);
    }

    .blue {
        color: var(--event-upcoming-circle);
    }
</style>
