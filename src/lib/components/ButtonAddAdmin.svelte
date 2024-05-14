<script>
    export let params = {
        color: "var(--news-background)",
        name : "Добавить что?",
        href: "/"}
</script>

<a href="{params.href}" style="background-color: {params.color};">
    <span>{params.name}</span>
    <img src="/src/assets/imgs/arrow-top-right.svg" alt="arrow">
</a>

<style>
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