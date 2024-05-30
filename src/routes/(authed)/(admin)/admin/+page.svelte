<script>
    import CardAdminMini from "$lib/components/CardAdminMini.svelte";
    import CardAdmin from "$lib/components/CardAdmin.svelte";
    import BestVolo from "$lib/components/BestVolo.svelte";
    import userImg from "$assets/imgs/profile-test.png";
    import ButtonAddAdmin from "$lib/components/ButtonAddAdmin.svelte";
    import UserCard from "$lib/components/UserCard.svelte";
    import Button from "$lib/components/Button.svelte";

    export let data;

    const users = data.users.slice(0, 4);
</script>

<main class="flex admin-content">
    <div class="page-half">
        <div class="admin-grid">
            <CardAdminMini color="1" title="Зарег-ых волонтеров" value="915" />
            <CardAdminMini color="3" title="Проведено ивентов" value="82" />
            <CardAdmin value="10" title="Команд" />
            <CardAdminMini color="2" value="74" title="Постов / новостей" />
            <CardAdminMini value="27" title="Мемберов в стаффе" />
            <BestVolo
                cardInfo={{ img: userImg, name: "Александр Македонский" }}
            />
        </div>
        <br />
        <div class="flex justify-between">
            <ButtonAddAdmin params={{ color: 0, name: "Добавить пост" }} />
            <ButtonAddAdmin params={{ color: 1, name: "Добавить ивент" }} />
        </div>
    </div>
    <div class="page-half"></div>
    <h2>Топ активных волонтеров</h2>
    <div class="users-grid">
        {#each users as user}
            <UserCard {user} />
        {/each}
    </div>

    <div class="flex justify-center" style="width: 100%;">
        <a href="volo-list"> <Button>Таблица всех воло</Button></a>
    </div>
</main>

<style>
    .users-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 15px 20px;
        width: 100%;
        margin-bottom: 30px;
    }

    h2 {
        color: var(--black);
        margin: 60px 0 20px;
    }
</style>
