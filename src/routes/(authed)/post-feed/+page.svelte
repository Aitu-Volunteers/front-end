<script>
    import CardNews from "$lib/components/CardNews.svelte";
    import Filter from "../../../lib/components/Filter.svelte";
    import Searchbar from "../../../lib/components/Searchbar.svelte";
</script>

<main class="flex justify-around">
    <div class="page-half">
        <Searchbar />
        <br />
        <CardNews
            cardInfo={{
                title: "Выборы руководителя ПО AITU VOLUNTEERS!",
                date: "23.01.2024",
            }}
        />
        <CardNews
            cardInfo={{
                title: "Поступление новых волонтеров первашей!",
                date: "23.01.2024",
            }}
        />
        <CardNews
            cardInfo={{
                title: "Выборы руководителя ПО AITU VOLUNTEERS!",
                date: "23.01.2024",
            }}
        />
        <CardNews
            cardInfo={{
                title: "Поступление новых волонтеров первашей!",
                date: "23.01.2024",
            }}
        />
        <CardNews
            cardInfo={{
                title: "Выборы руководителя ПО AITU VOLUNTEERS!",
                date: "23.01.2024",
            }}
        />
    </div>
    <div class="page-half">
        <br /><br /><br />
        <Filter />
    </div>
</main>
