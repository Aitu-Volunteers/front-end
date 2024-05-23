<script>
    import CardNews from "$lib/components/CardNews.svelte";
    import Filter from "$lib/components/Filter.svelte";
    import Searchbar from "$lib/components/Searchbar.svelte";

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
</script>

<main class="flex justify-around">
    <div class="page-half" style="margin: 0 0 30px;">
        <Searchbar />
    </div>
    <div class="page-half"></div>
    <div class="page-half">
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
        <Filter {params} />
    </div>
</main>
