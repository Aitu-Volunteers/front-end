<script>
    import { page } from "$app/stores";
    import homeIcon from "$assets/imgs/home-nav.svg";
    import profileIcon from "$assets/imgs/profile-nav.svg";
    import eventsIcon from "$assets/imgs/events-nav.svg";
    import postIcon from "$assets/imgs/post-nav.svg";
    import teamsIcon from "$assets/imgs/teams-nav.svg";
    import logo from "$assets/imgs/logo-auth.png";

    const navItems = [
        {
            name: "Главная",
            link: "/",
            icon: homeIcon,
        },
        { name: "Профиль", link: "/profile", icon: profileIcon },
        { name: "Ивенты", link: "/events-feed", icon: eventsIcon },
        { name: "Посты", link: "/post-feed", icon: postIcon },
        { name: "Команды", link: "/teams", icon: teamsIcon },
    ];
</script>

<div class="sidebar-wrapper">
    <div class="sidebar-head">
        <img src={logo} alt="logo" />
        <div class="sidebar-head__col">
            <div class="sidebar-head__title">AITU VOLUNTEERS</div>
            <div class="sidebar-head__text">Project office</div>
        </div>
    </div>
    <div class="sidebar-items">
        {#each navItems as item}
            <a
                href={item.link}
                class="sidebar-item"
                aria-current={$page.url.pathname === item.link}
            >
                <img src={item.icon} alt="" />
                {item.name}
            </a>
        {/each}
    </div>

    <div class="sidebar-toggle-switch">
        <label class="switch">
            <input type="checkbox" hidden />
            <span class="slider"></span>
        </label>
    </div>
</div>

<style>
    .sidebar-wrapper {
        max-width: 256px;
        width: 100%;
        height: 100dvh;
        background: var(--main);
        display: flex;
        flex-direction: column;
        gap: 15dvh;
        padding: 20px 0;
    }
    .sidebar-head {
        display: flex;
        align-items: center;
        padding: 20px;
    }
    .sidebar-head img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }
    .sidebar-head__col {
        display: flex;
        flex-direction: column;
        color: var(--white);
        margin: 0 0 0 10px;
    }
    .sidebar-head__title {
        font-weight: 700;
    }
    .sidebar-head__text {
        font-size: 0.875rem;
    }
    .sidebar-items {
        display: flex;
        flex-direction: column;
    }
    .sidebar-item img {
        margin: 0 15px;
    }
    .sidebar-item {
        font-weight: var(--semibold);
        font-size: 1.25rem;
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .sidebar-item[aria-current="true"]::after {
        content: "";
        width: 12px;
        height: 100%;
        background: #f5b1ff;
        border-radius: var(--border10) 0 0 var(--border10);
        position: absolute;
        top: 0;
        right: 0;
    }
    .sidebar-toggle-switch {
        display: flex;
        align-items: center;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 6rem;
        height: 2.5rem;
        margin: 0 auto;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--auth-half-background);
        transition: 0.3s;
        border-radius: 50px;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 2rem;
        width: 2rem;
        left: 0.25rem;
        bottom: 0.25rem;
        background-color: var(--white);
        transition: 0.3s;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: end;
    }
    .slider:after {
        position: absolute;
        content: "";
        width: 2rem;
        right: 0.25rem;
        bottom: 0.25rem;
        transition: 0.3s;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: end;
    }
    .slider:before {
        content: url("../../assets/imgs/sun-day.svg");
    }
    .slider:after {
        content: url("../../assets/imgs/moon-night.svg");
    }
    input:checked + .slider:before {
        content: url("../../assets/imgs/moon-night.svg");
    }
    input:checked + .slider:after {
        content: url("../../assets/imgs/sun-day.svg");
    }
    input:active + .slider::before {
        width: 3rem;
    }
    input:active + .slider::after {
        width: 3rem;
    }
    input:checked + .slider {
        background: var(--secondary-light);
    }
    input:checked:active + .slider::before {
        transform: translate(2.5rem, 0);
        width: 3rem;
    }
    input:checked:active + .slider::after {
        transform: translate(-2.5rem, 0);
        width: 3rem;
    }
    input:checked + .slider:before {
        transform: translateX(3.5rem);
        background: var(--main);
    }
    input:checked + .slider:after {
        transform: translateX(-3.5rem);
    }
    @media (max-width: 1120px) {
        .sidebar-wrapper {
            display: none;
        }
    }
</style>
