<script>
    export let cardInfo = {
        img: undefined,
        name: undefined,
    };
</script>

<div class="best-volo-wrapper">
    <div class="best-volo-head">Волонтер месяца:</div>
    <div class="best-volo-row">
        <div class="best-volo-image">
            <img src={cardInfo.img} alt={cardInfo.name} />
        </div>
        <div>{cardInfo.name}</div>
    </div>
</div>

<style>
    .best-volo-wrapper {
        box-shadow: var(--card-shadow);
        display: flex;
        flex-direction: column;
        max-width: 256px;
        min-height: 122px;
        align-items: center;
        justify-content: center;
        border-radius: var(--border10);
        padding: 15px;
    }
    .best-volo-head {
        background: var(--gradient-main);
        background-clip: text;
        color: transparent;
        font-size: 1.25rem;
        font-weight: 700;
        width: 100%;
        text-align: start;
        margin: 0 0 10px;
    }
    .best-volo-row {
        display: flex;
        font-size: 1.25rem;
        gap: 15px;
    }
    .best-volo-image img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>
