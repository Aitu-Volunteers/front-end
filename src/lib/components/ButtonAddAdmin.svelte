<script>
    export let params = {
        color: 0,
        name: "Добавить что?",
        href: "/",
    };

    const colors = ["news", "event"];
</script>

<a href={params.href} class={colors[params.color]}>
    <span>{params.name}</span>
    <img src="/src/assets/imgs/arrow-top-right.svg" alt="arrow" />
</a>

<style>
    .event {
        background-color: #cdcaff;
    }

    .news {
        background-color: #ffe1b2;
    }

    a {
        text-decoration: none;
        max-width: 256px;
        max-height: 80px;
        color: #000;
        font-size: 1.5rem;
        font-weight: var(--semibold);
        padding: 5px;
        border-radius: var(--border10);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        margin-left: 10px;
    }

    a :hover {
        cursor: pointer;
    }

    img {
        padding: 15px 25px;
        background-color: var(--white);
        border-radius: 0px 8px 8px 0px;
    }
</style>
