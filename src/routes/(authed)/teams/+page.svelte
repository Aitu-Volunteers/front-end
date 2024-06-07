<script>
    import CardTeam from "$lib/components/CardTeam.svelte";
    export let data;
    const cardInfoArray = data.data[0];
    const participate = data.data[1];
</script>

<main>
    {#each cardInfoArray as cardInfo, i}
        <CardTeam {...cardInfo} participate={i == participate} />
    {/each}  
</main>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
        gap: 20px;
    }
</style>
