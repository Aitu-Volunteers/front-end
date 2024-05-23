<script>
    import CardPersonEvent from "$lib/components/CardPersonEvent.svelte";
    import userImg from "$assets/imgs/profile-test.png";
    import telegramIcon from "$assets/imgs/telegram.svg";
    import Button from "$lib/components/Button.svelte";

    const cardInfoArray = [
        {
            title: "Event 1",
            description: "This is the description for event 1.",
            date: "2024-05-01",
            duration: 4,
        },
        {
            title: "Event 2",
            description: "This is the description for event 2.",
            date: "2024-06-15",
            duration: 8,
        },
        {
            title: "Event 3",
            description: "This is the description for event 3.",
            date: "2024-07-20",
            duration: 12,
        },
    ];
</script>

<main class="flex justify-around profile-content">
    <div class="flex mb30" style="width: 100%;">
        <div style="margin: 0 60px 0 30px;">
            <img src={userImg} alt="user" />
        </div>
        <div class="flex col items-center justify-center">
            <div>
                <span class="name-info">Чел Мемный</span>
                <span class="group-info">CS-2252</span>
            </div>
            <div class="flex items-center" style="margin: 20px 0;">
                <img src={telegramIcon} alt="telegram" />
                <div class="tg-tag">@Alerrad</div>
            </div>
            <div class="flex">
                <button class="edit"
                    ><svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 14H14"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3 9.00007L9.66667 2.3334C10.2189 1.78112 11.1144 1.78112 11.6667 2.3334C12.2189 2.88569 12.2189 3.78112 11.6667 4.3334L5 11.0001L2.33334 11.6667L3 9.00007Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    редактировние</button
                >
                <form method="post" action="/logout">
                    <button class="logout">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 12H15"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M8 7L3 12L8 17"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M21 3V21"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Выход
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div class="page-half">
        <div class="mb30">
            <span>Баркод:</span>
            <span class="bio-info">220190</span>
        </div>
        <div class="mb30">
            <span>Команда:</span>
            <span class="bio-info">8 (Амина)</span>
        </div>
        <div class="mb30">
            <span>О себе:</span>
            <br />
            <span class="bio-info"
                >Люблю делать ивенты людей... <br />шучу не людей</span
            >
        </div>
    </div>
    <div class="page-half">
        <div class="mb30">
            <span>Участие в ивентах</span>
            <br />
            <span class="bio-info">волонтерства: 36ч.</span>
        </div>
        {#each cardInfoArray as cardInfo}
            <div style="margin: 0 0 20px;">
                <CardPersonEvent {cardInfo} />
            </div>
        {/each}
    </div>
</main>
