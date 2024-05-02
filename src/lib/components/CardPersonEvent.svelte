<script>
    export let cardInfo = {
        title: undefined,
        description: undefined,
        date: undefined,
        duration: 0,
    };

    let background;
    if (cardInfo.duration <= 4) background = "h4";
    else if (cardInfo.duration > 8) background = "h12";
    else background = "h8";
</script>

<div class="person-event-wrapper {background}">
    <div class="col">
        <div class="row">
            <span class="person-event-title">{cardInfo.title}</span>
            <span class="person-event-date">{cardInfo.date}</span>
        </div>
        <div class="person-event-description">
            {cardInfo.description}
        </div>
    </div>
    <div class=" col col-2">
        <span>{cardInfo.duration}ч</span>

        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask id="path-1-inside-1_240_1516" fill="white">
                <path
                    d="M50 0C40.1109 -1.17926e-07 30.4439 2.93245 22.2215 8.42652C13.999 13.9206 7.59041 21.7295 3.80602 30.8658C0.0216418 40.0021 -0.968525 50.0555 0.960736 59.7545C2.89 69.4536 7.65204 78.3627 14.6447 85.3553C21.6373 92.348 30.5464 97.11 40.2455 99.0393C49.9445 100.969 59.9979 99.9784 69.1342 96.194C78.2705 92.4096 86.0794 86.001 91.5735 77.7785C97.0676 69.5561 100 59.8891 100 50H50V0Z"
                />
            </mask>
            <path
                d="M50 0C40.1109 -1.17926e-07 30.4439 2.93245 22.2215 8.42652C13.999 13.9206 7.59041 21.7295 3.80602 30.8658C0.0216418 40.0021 -0.968525 50.0555 0.960736 59.7545C2.89 69.4536 7.65204 78.3627 14.6447 85.3553C21.6373 92.348 30.5464 97.11 40.2455 99.0393C49.9445 100.969 59.9979 99.9784 69.1342 96.194C78.2705 92.4096 86.0794 86.001 91.5735 77.7785C97.0676 69.5561 100 59.8891 100 50H50V0Z"
                stroke="white"
                stroke-width="2"
                mask="url(#path-1-inside-1_240_1516)"
            />
            <circle cx="50" cy="50" r="49.5" stroke="white" />
        </svg>
    </div>
</div>

<style>
    .person-event-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: var(--border20);
        padding: 20px;
        width: 100%;
        max-width: 480px;
        min-width: 280px;
        color: var(--dark-gray);
    }

    .col {
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    .col-2 {
        align-items: center;
        width: 40%;
        font-size: 1.75rem;
        color: black;
        position: relative;
        height: 100%;
    }

    .col-2 svg {
        position: absolute;
        top: -100%;
    }

    .col-2 span {
        z-index: 1;
    }

    .row {
        display: flex;
        align-items: center;
    }

    .person-event-title {
        font-size: 1.25rem;
        font-weight: var(--semibold);
    }

    .person-event-date {
        margin: 0 0 0 15px;
    }

    .person-event-description {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
        margin: 10px 0 0;
    }

    .h4 {
        background: var(--person-event-4h);
    }

    .h8 {
        background: var(--person-event-8h);
    }

    .h12 {
        background: var(--person-event-12h);
    }
</style>
