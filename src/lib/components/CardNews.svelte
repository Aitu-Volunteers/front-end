<script>
    import Button from "$lib/components/Button.svelte";

    export let cardInfo = {
        title: undefined,
        date: undefined,
        id: 11,
    };
</script>

<div class="news-wrapper">
    <div>
        <span class="news-date"
            ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2 4.00002C2 3.26364 2.59695 2.66669 3.33333 2.66669H12.6667C13.4031 2.66669 14 3.26364 14 4.00002V13.3334C14 14.0698 13.4031 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0698 2 13.3334V4.00002Z"
                    stroke="#A56600"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M2 6.66669H14"
                    stroke="#A56600"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M10.6667 1.33331V3.99998"
                    stroke="#A56600"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M5.33333 1.33331V3.99998"
                    stroke="#A56600"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            {cardInfo.date}
        </span>
        <span class="news-title">
            {cardInfo.title}
        </span>
    </div>
    <div>
        <a href="/post-feed/{cardInfo.id}"><Button>подробнее</Button></a>
    </div>
</div>

<style>
    .news-wrapper {
        background-color: var(--news-background);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-width: 350px;
        max-width: 536px;
        padding: 20px;
        color: var(--news-text);
        font-weight: var(--semibold);
        border-radius: var(--border20);
    }

    .news-wrapper:nth-child(odd) {
        background-image: var(--background-svg-secondary);
    }

    .news-wrapper:nth-child(even) {
        background-image: var(--background-svg-news);
    }

    .news-date {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        margin: 0 0 5px;
    }

    .news-date svg {
        margin: 0 5px 0px 0;
    }
</style>
