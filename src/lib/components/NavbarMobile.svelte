<script>
    import { page } from "$app/stores";
    import homeIcon from "$assets/imgs/home-nav-mobile.svg";
    import profileIcon from "$assets/imgs/profile-nav-mobile.svg";
    import eventsIcon from "$assets/imgs/events-nav-mobile.svg";
    import postIcon from "$assets/imgs/post-nav-mobile.svg";

    const navItems = [
        {
            name: "Главная",
            link: "/",
            icon: homeIcon,
        },
        { name: "Профиль", link: "/profile", icon: profileIcon },
        { name: "Ивенты", link: "/events-feed", icon: eventsIcon },
        { name: "Посты", link: "/post-feed", icon: postIcon },
    ];
</script>

<div class="nav-wrapper">
    <div class="nav-items">
        {#each navItems as item}
            <a
                href={item.link}
                class="nav-item"
                aria-current={$page.url.pathname === item.link}
            >
                <img src={item.icon} alt={item.name} />
            </a>
        {/each}
    </div>
</div>

<style>
    .nav-wrapper {
        position: fixed;
        bottom: 0;
        width: 100dvw;
        height: 72px;
        background: var(--white);
        display: none;
        justify-content: center;
        box-shadow: var(--card-shadow);
    }
    .nav-items {
        display: flex;
        height: 100%;
        max-width: 536px;
        width: 100%;
        justify-content: space-evenly;
    }
    .nav-item {
        font-weight: var(--semibold);
        font-size: 1.25rem;
        padding: 10px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .nav-item[aria-current="true"]::after {
        content: "";
        width: 100%;
        height: 12px;
        background: #f5b1ff;
        border-radius: 0 0 var(--border10) var(--border10);
        position: absolute;
        top: 0;
        right: 0;
        margin: 0 auto;
    }

    @media (max-width: 1120px) {
        .nav-wrapper {
            display: flex;
        }
    }
</style>
