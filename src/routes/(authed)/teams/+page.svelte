<script>
    import CardTeam from "../../../lib/components/CardTeam.svelte";
    export let cardInfoArray = [
        {
            imgUrl: "https://example.com/image1.jpg",
            title: "Card 1",
            content: "This is the content of card 1.",
            people: 10,
            participate: true,
        },
        {
            imgUrl: "https://example.com/image2.jpg",
            title: "Card 2",
            content: "This is the content of card 2.",
            people: 5,
            participate: false,
        },
        {
            imgUrl: "https://example.com/image3.jpg",
            title: "Card 3",
            content: "This is the content of card 3.",
            people: 8,
            participate: false,
        },
        {
            imgUrl: "https://example.com/image4.jpg",
            title: "Card 4",
            content: "This is the content of card 4.",
            people: 3,
            participate: false,
        },
        {
            imgUrl: "https://example.com/image5.jpg",
            title: "Card 5",
            content: "This is the content of card 5.",
            people: 20,
            participate: false,
        },
        {
            imgUrl: "https://example.com/image6.jpg",
            title: "Card 6",
            content: "This is the content of card 6.",
            people: 0,
            participate: false,
        },
        {
            imgUrl: "https://example.com/image7.jpg",
            title: "Card 7",
            content: "This is the content of card 7.",
            people: 15,
            participate: false,
        },
        {
            imgUrl: "https://example.com/image8.jpg",
            title: "Card 8",
            content: "This is the content of card 8.",
            people: 7,
            participate: false,
        },
    ];
</script>

<main>
    {#each cardInfoArray as cardInfo}
        <CardTeam {cardInfo} />
    {/each}
</main>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
        gap: 20px;
    }
</style>
