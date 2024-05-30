<script>
    import Filter from "$lib/components/Filter.svelte";
    import Searchbar from "$lib/components/Searchbar.svelte";
    import UserCard from "$lib/components/UserCard.svelte";

    export let data;

    const params = [
        {
            title: "Основное",
            settings: ["Все воло", "Без команды", "Активные"],
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
        {#each data.users as user}
            <div style="margin: 0 0 15px">
                <UserCard {user} />
            </div>
        {/each}
    </div>
    <div class="page-half">
        <Filter {params} />
    </div>
</main>
