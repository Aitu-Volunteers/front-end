<script>
    export let cardInfo = {
        imgUrl: undefined,
        title: undefined,
        content: undefined,
        people: -1,
        participate: false,
    };
</script>

<div class="card-container">
    <div
        class="card-header"
        style:background-image={`url(${cardInfo.imgUrl})`}
    ></div>
    <div class="card-body">
        <div class="title">
            Команда {cardInfo.title}
        </div>
        <div class="content">
            {cardInfo.content}
        </div>
        <div class="people">
            <img
                src="./src/assets/imgs/people_number_icon.svg"
                alt="icon"
            />{cardInfo.people}
        </div>
    </div>
    <div class="card-footer">
        {#if cardInfo.participate === true}
            <button class="view">Текущая команда</button>
        {:else}
            <button class="join">Вступить</button>
        {/if}
    </div>
</div>

<style>
    .card-container {
        height: 280px;
        width: 100%;
        border-radius: 20px;
        background: var(--white);
        box-shadow: var(--card-shadow);
        display: flex;
        flex-direction: column;
    }

    .card-header {
        background-color: rgb(0, 170, 170);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        flex-grow: 5;
        border-radius: 20px 20px 0px 0px;
    }

    .card-body {
        flex-grow: 2;
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .card-footer {
        flex-grow: 1;
    }

    .title {
        font-size: 1.3rem;
        font-weight: bold;
    }

    .content {
        font-size: 1rem;
    }

    .people {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    button {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0px 0px 20px 20px;
        font-size: 1.3rem;
        font-weight: bold;
        color: white;
        transition: 0.2s ease;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.9;
    }

    .join {
        background-color: var(--secondary);
    }

    .view {
        background-color: var(--current-team);
    }
</style>
