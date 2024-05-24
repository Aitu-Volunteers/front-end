<script>
    import CardNews from "$lib/components/CardNews.svelte";
    import Filter from "$lib/components/Filter.svelte";
    import Searchbar from "$lib/components/Searchbar.svelte";

    //Posts data
    export let data;
    const posts = data.props.data;

    //Filter parameters
    const params = [
        {
            title: "Основное",
            settings: [
                "Все ивенты",
                "Предстоящие",
                "Активные",
                "Завершенные",
                "Мои ивенты",
            ],
            selected: 0,
        },
        {
            title: "Дата",
            settings: ["Сначала новые", "Сначала старые"],
            selected: 0,
        },
    ];
    
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
    <div class="page-half" style="margin: 0 0 30px;">
        <Searchbar />
    </div>
    <div class="page-half"></div>
    <div class="page-half">
        {#each posts as post}
            <CardNews
                cardInfo={{
                    title: `${post.postInfo.title}`,
                    date: `${convertToDate(post.postInfo.createDate)}`,
                    id: `${post.id}`
                }}
            />
        {/each}
    </div>
    <div class="page-half">
        <Filter {params} />
    </div>
</main>
