<script>
    export let color = 0;
    export let info = {
        max: 0,
        value: 0,
    };

    const progress = (info.value / info.max) * 100;

    const colors = ["dark", "light"];

    function circumference() {
        const radius = 40;
        return 2 * Math.PI * radius;
    }
</script>

<div class="progress-wrapper {colors[color]}">
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
        --event-dark: #5c44a2;
        max-width: 100px;
    }

    .progress-title {
        font-size: 1.25rem;
        font-weight: var(--semibold);
        text-align: center;
        margin: 0 0 10px;
    }

    .dark span {
        color: var(--event-dark);
    }

    .light span {
        color: var(--event-upcoming-circle);
    }

    svg {
        transform: rotateZ(90deg);
    }

    .dark {
        background: url("../../assets/imgs/user-group-accounts-dark.svg") 50%
            65% no-repeat;
        color: var(--white);
        stroke: var(--white);
    }

    .light {
        background: url("../../assets/imgs/user-group-accounts-light.svg") 50%
            65% no-repeat;
        color: #dbdbdb;
        stroke: #dbdbdb;
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

    .dark .progress {
        stroke: var(--event-dark);
    }

    .light .progress {
        stroke: var(--event-upcoming-circle);
    }
</style>
