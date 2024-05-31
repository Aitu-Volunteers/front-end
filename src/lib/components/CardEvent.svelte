<script>
    import CircleProgress from "./CircleProgress.svelte";

    export let cardInfo = {
        title: undefined,
        description: undefined,
        days: [
            {
                id: 1,
                startDate: undefined,
                endDate: undefined,
                participantLimit: 0,
                active: false,
            },
        ],
        id: 1,
    };

    export let status = 0;
    const getStatus = ["active", "upcoming", "inactive"];

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    };
</script>

<div class="event-card-wrapper {getStatus[status]}">
    <div class="event-card-col">
        <div class="event-card-title">{cardInfo.title}</div>
        <div class="event-card-description">{cardInfo.description}</div>
        <div class="event-card-row">
            <a href="events-feed/{cardInfo.id}">
                <button class="event-card-button">
                    {#if status != 2}Регистрация
                    {:else}Подробнее{/if}
                </button>
            </a>
            <div class="event-card-row">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M3 10H21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M16 2V6"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M8 2V6"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <span class="event-card-date">
                    {formatDate(cardInfo.days[0].startDate)}
                </span>
            </div>
        </div>
    </div>
    <div class="event-card-col col2">
        <CircleProgress
            info={{
                max: cardInfo.days[0].participantLimit,
                value: cardInfo.value,
            }}
            status={status != 1 ? status : status - 1}
        />
    </div>
</div>

<style>
    .active {
        --event-bg: var(--event-active-background);
        --event-text: var(--event-active-text);
        --event-circle: var(--event-dark-blue);
    }
    .upcoming {
        --event-bg: var(--event-upcoming-background);
        --event-text: var(--event-upcoming-text);
        --event-circle: var(--event-dark-blue);
    }
    .inactive {
        --event-bg: var(--event-inactive-background);
        --event-text: var(--event-inactive-text);
        --event-circle: var(--event-inactive-circle);
    }
    .event-card-wrapper {
        max-width: 536px;
        background: var(--event-bg);
        border-radius: var(--border20);
        display: flex;
        padding: 20px;
    }
    .event-card-col {
        display: flex;
        flex-direction: column;
        color: var(--event-circle);
        width: 63%;
    }
    .event-card-title {
        font-weight: var(--semibold);
        font-size: 1.25rem;
    }
    .event-card-description {
        margin: 20px 0;
        color: var(--event-text);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 3;
    }
    .event-card-row {
        display: flex;
        align-items: center;
    }
    path {
        stroke: var(--event-circle);
    }
    .event-card-button {
        background: var(--event-circle);
        border-radius: var(--border15);
        padding: 8px 16px;
        color: var(--white);
        border: none;
        cursor: pointer;
    }
    .event-card-date {
        font-weight: var(--semibold);
        font-size: 1.125rem;
    }
    .event-card-row svg {
        margin: 0 10px 0 20px;
    }
    .col2 {
        width: 37%;
        align-items: center;
        justify-content: center;
    }
</style>
