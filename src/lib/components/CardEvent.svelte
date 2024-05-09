<script>
    import CircleProgress from "./CircleProgress.svelte";

    export let cardInfo = {
        title: undefined,
        description: undefined,
        date: undefined,
        max: 0,
        value: 0,
    };
</script>

<div class="event-card-wrapper">
    <div class="event-card-col">
        <div class="event-card-title">{cardInfo.title}</div>
        <div class="event-card-description">{cardInfo.description}</div>
        <div class="event-card-row">
            <button class="event-card-button">Регистрация</button>
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
                        stroke="#5C44A2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M3 10H21"
                        stroke="#5C44A2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M16 2V6"
                        stroke="#5C44A2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M8 2V6"
                        stroke="#5C44A2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <span class="event-card-date">{cardInfo.date}</span>
            </div>
        </div>
    </div>
    <div class="event-card-col col2">
        <CircleProgress info={{ max: cardInfo.max, value: cardInfo.value }} />
    </div>
</div>

<style>
    .event-card-wrapper {
        max-width: 536px;
        background: #c5c4ff;
        border-radius: var(--border20);
        display: flex;
        padding: 20px;
        --event-dark: #5c44a2;
    }
    .event-card-col {
        display: flex;
        flex-direction: column;
        color: var(--event-dark);
        width: 63%;
    }
    .event-card-title {
        font-weight: var(--semibold);
        font-size: 1.25rem;
    }
    .event-card-description {
        margin: 20px 0;
        color: #765bc5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 3;
    }
    .event-card-row {
        display: flex;
        align-items: center;
    }
    .event-card-button {
        background: var(--event-dark);
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
