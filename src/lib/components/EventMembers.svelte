<script>
    import CircleProgress from "$lib/components/CircleProgress.svelte";

    export let info = {
        startDate: undefined,
        endDate: undefined,
        id: 1,
        participantLimit: 0,
        value: 0,
        active: false,
    };

    const formatDate = (dateString) => {
        let date = new Date(dateString);

        let hours = date.getHours();
        let minutes = date.getMinutes();

        return hours + ":" + minutes;
    };
</script>

<div class="event-member-wrapper">
    <div class="event-member-head">
        <div class="event-member-day">День {info.id}</div>
        <div class="event-member-duration">
            {formatDate(info.startDate)}-{formatDate(info.endDate)}
        </div>
    </div>

    <CircleProgress
        status="1"
        info={{ max: info.participantLimit, value: info.value }}
    />

    {#if !info.active}
        <button class="join">Запись</button>
    {:else}
        <button class="cancel">Отмена</button>
    {/if}
</div>

<style>
    .event-member-wrapper {
        display: flex;
        flex-direction: column;
        max-width: 100px;
    }

    .event-member-head {
        text-align: center;
        margin: 0 0 15px;
    }

    .event-member-day {
        font-weight: var(--semibold);
        font-size: 1.5rem;
    }

    .event-member-wrapper button {
        color: var(--white);
        border: none;
        cursor: pointer;
        border-radius: var(--border20);
        padding: 10px 16px;
        margin: 15px 0 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 500;
    }

    .join {
        background-color: var(--secondary);
    }

    .cancel {
        background: var(--current-team);
    }
</style>
