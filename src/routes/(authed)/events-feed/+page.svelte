<script>
    import CardEvent from "$lib/components/CardEvent.svelte";
    import Filter from "$lib/components/Filter.svelte";
    import Searchbar from "$lib/components/Searchbar.svelte";
</script>

<main class="flex justify-around">
    <div class="page-half" style="margin: 0 0 30px;">
        <Searchbar />
    </div>
    <div class="page-half"></div>
    <div class="page-half">
        <CardEvent
            cardInfo={{
                title: "Zavod makara",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam similique asperiores molestias eveniet blanditiis fugit aut consequatur quasi earum, beatae nobis voluptates tempora, odio optio minus labore incidunt sapiente?",
                date: "23.08.2024",
                max: 10,
                value: 1,
            }}
        />
        <CardEvent
            cardInfo={{
                title: "Zavod makara",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam similique asperiores molestias eveniet blanditiis fugit aut consequatur quasi earum, beatae nobis voluptates tempora, odio optio minus labore incidunt sapiente?",
                date: "23.08.2024",
                max: 10,
                value: 5,
            }}
            status="1"
        />
        <CardEvent
            cardInfo={{
                title: "Zavod makara",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam similique asperiores molestias eveniet blanditiis fugit aut consequatur quasi earum, beatae nobis voluptates tempora, odio optio minus labore incidunt sapiente?",
                date: "23.08.2024",
                max: 10,
                value: 3,
            }}
            status="1"
        />
        <CardEvent
            cardInfo={{
                title: "Zavod makara",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam similique asperiores molestias eveniet blanditiis fugit aut consequatur quasi earum, beatae nobis voluptates tempora, odio optio minus labore incidunt sapiente?",
                date: "23.08.2024",
                max: 10,
                value: 5,
            }}
            status="2"
        />
    </div>
    <div class="page-half">
        <Filter />
    </div>
</main>
