<script>
    export let status = 0;
    export let info = {
        max: 0,
        value: 0,
    };

    const progress = (info.value / info.max) * 100;

    const getStatus = ["active", "upcoming", "inactive"];

    function circumference() {
        const radius = 40;
        return 2 * Math.PI * radius;
    }
</script>

<div class="progress-wrapper {getStatus[status]}">
    <div class="progress-title">
        <span>{info.value}</span> / {info.max}
    </div>

    <svg viewBox="0 0 100 100" width="100" height="100">
        <circle class="circle" cx="50" cy="50" r="40"></circle>
        <circle
            class="progress"
            cx="50"
            cy="50"
            r="40"
            style:stroke-dasharray={circumference()}
            style:stroke-dashoffset={(1 - progress / 100) * circumference()}
        ></circle>
    </svg>
</div>

<style>
    .progress-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 100px;
    }

    .progress-title {
        font-size: 1.25rem;
        font-weight: var(--semibold);
        text-align: center;
        margin: 0 0 10px;
    }

    .active span {
        color: var(--event-dark-blue);
    }

    .upcoming span {
        color: var(--event-upcoming-circle);
    }

    .inactive span {
        color: var(--event-inactive-circle);
    }

    svg {
        transform: rotateZ(90deg);
    }

    .active {
        background: url("../../assets/imgs/user-group-accounts-dark.svg") 50%
            65% no-repeat;
        color: var(--white);
        stroke: var(--white);
    }

    .upcoming {
        background: url("../../assets/imgs/user-group-accounts-light.svg") 50%
            65% no-repeat;
        color: #dbdbdb;
        stroke: #dbdbdb;
    }

    .inactive {
        background: url("../../assets/imgs/user-group-accounts-inactive.svg")
            50% 65% no-repeat;
        color: var(--white);
        stroke: var(--white);
    }

    .circle {
        fill: none;
        stroke-width: 6;
    }

    .progress {
        fill: none;
        stroke-width: 6;
        transition: stroke-dasharray 0.3s;
    }

    .active .progress {
        stroke: var(--event-dark-blue);
    }

    .upcoming .progress {
        stroke: var(--event-upcoming-circle);
    }

    .inactive .progress {
        stroke: var(--event-inactive-circle);
    }
</style>
