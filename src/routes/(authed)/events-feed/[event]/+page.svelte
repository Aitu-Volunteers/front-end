<script>
    import "$assets/styles/post.css";
    import EventMembers from "$lib/components/EventMembers.svelte";
    export let data;

    let event = data.event;
</script>

<main class="flex justify-around">
    <div class="page-half">
        <div class="title-block">
            <a class="go-back" href="/events-feed">
                <img src="/src/assets/imgs/arrow-left.svg" alt="left-arrow" />
            </a>
            <div class="title">
                {event.title}
            </div>
        </div>
        <div class="separate-block">
            <div class="post-content">
                {event.description}
            </div>
        </div>
    </div>
    <div class="page-half">
        <div class="calendar"></div>
        <div class="separate-block">
            <div class="event-days">
                {#each event.days as day}
                    <EventMembers info={{ ...day, value: 7 }} />
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
    .separate-block {
        margin-top: 52px;
        margin-bottom: 52px;
    }

    .calendar {
        max-width: 536px;
        height: 356px;
        background: #000;
    }

    .title-block {
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .title {
        font-weight: 500;
        font-size: 1.5rem;
    }

    .go-back {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .event-days {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }
</style>
