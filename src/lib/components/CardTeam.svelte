<script>
    export let description;
    export let id = -1;
    export let leader = {};
    export let members = [];
    export let title;
    export let telegramLink;
    export let participate = false;

    const handleJoin = () => {
        alert('Join button clicked');
        // Future: Send a POST request to join the team
    };
</script>

<div class="card-container">
    <div class="card-header"></div>
    <div class="card-body">
        <div class="title">
            Команда {leader.firstName}
        </div>
        <div class="content">
            {description}
        </div>
        <div class="people">
            <img src="./src/assets/imgs/people_number_icon.svg" alt="icon" />{members.length}
        </div>
    </div>
    <div class="card-footer">
        {#if participate}
            <button class="view">Текущая команда</button>
        {:else}
            <button class="join" on:click={handleJoin}>Вступить</button>
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
        border-radius: 20px 20px 0 0;
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
        border-radius: 0 0 20px 20px;
        font-size: 1.3rem;
        font-weight: bold;
        color: white;
        transition: 0.2s ease;
    }

    .join:hover {
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
