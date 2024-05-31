<script>
    import CardEvent from "$lib/components/CardEvent.svelte";
    import Filter from "$lib/components/Filter.svelte";
    import Searchbar from "$lib/components/Searchbar.svelte";

    export let data;
</script>

<main class="flex justify-around">
    <div class="page-half" style="margin: 0 0 30px;">
        <Searchbar />
    </div>
    <div class="page-half"></div>
    <div class="page-half">
        {#each data.events as event}
            <CardEvent cardInfo={{ ...event, value: 7 }} />
        {/each}
    </div>
    <div class="page-half">
        <Filter />
    </div>
</main>
