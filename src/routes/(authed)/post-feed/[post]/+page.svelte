<script>
    //Components
    import CardNews from "$lib/components/CardNews.svelte";
    //CSS
    import "$assets/styles/post.css";
    //Post data
    export let data;
    const post = data.props.post;
    const otherPosts = data.props.posts;

    //Convert from TimeStamp to Date
    function convertToDate(datetimeString) {
        const datetime = new Date(datetimeString);

        const year = datetime.getFullYear(); // Get the year
        const month = datetime.getMonth() + 1; // Get the month
        const day = datetime.getDate(); // Get the day of the month

        // Format the month and day with leading 0
        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDay = day < 10 ? `0${day}` : day;

        // Concatenate the year, month, and day
        const date = `${formattedDay}-${formattedMonth}-${year}`;
        return date;
    }
</script>

<main class="flex justify-around">
    <div class="page-half">
        <div class="title-block">
            <a class="go-back" href="/post-feed">
                <img src="/src/assets/imgs/arrow-left.svg" alt="left-arrow" />
            </a>
            <div class="title">
                {post.title}
            </div>
        </div>
        <div class="separate-block">
            <div class="post-content">
                {@html post.html}
            </div>
        </div>
        <div class="date">
            <img
                src="/src/assets/imgs/calendar-appointment-date-post.svg"
                alt="calendar"
            />
            <span>{convertToDate(post.createDate)}</span>
        </div>
    </div>
    <div class="page-half">
        <div class="title-block">
            <div class="title">Другие посты</div>
        </div>
        <div class="separate-block">
            {#each otherPosts as otherPost}
                <CardNews
                    cardInfo={{
                        title: `${otherPost.title}`,
                        date: `${convertToDate(otherPost.date)}`,
                        id: `${otherPost.id}`,
                    }}
                />
            {/each}
        </div>
        <div style="width: 100%; text-align: center">
            <a href="/post-feed" class="view-all-posts">Смотреть все посты</a>
        </div>
    </div>
</main>

<style>
    .separate-block {
        margin-top: 52px;
        margin-bottom: 52px;
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

    .date {
        color: var(--dark-gray);
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .view-all-posts {
        text-decoration: none;
        font-size: 1rem;
        color: var(--secondary);
        margin: auto;
    }

    .go-back:hover {
        cursor: pointer;
    }
</style>
