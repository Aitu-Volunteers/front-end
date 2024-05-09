<script>
    import CircleProgress from "$lib/components/CircleProgress.svelte";

    export let info = {
        start: undefined,
        end: undefined,
        day: 1,
        max: 0,
        value: 0,
    };
</script>

<div class="event-member-wrapper">
    <div class="event-member-head">
        <div class="event-member-day">День {info.day}</div>
        <div class="event-member-duration">{info.start}-{info.end}</div>
    </div>

    <CircleProgress color="1" info={{ max: info.max, value: info.value }} />
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
</style>
