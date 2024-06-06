<script>
    import CardEvent from "$lib/components/CardEvent.svelte";
    import CardNews from "$lib/components/CardNews.svelte";
    import ReferenceButton from "$lib/components/ReferenceButton.svelte";

    import githubicon from "$assets/imgs/Github-icon.svg";
    import attachmenticon from "$assets/imgs/attachment-clip-hook.svg";
    import helpicon from "$assets/imgs/help-question.png";

    export let data;
</script>

<main class="flex justify-around">
    <div class="page-half">
        {#each data.events as event}
            <CardEvent cardInfo={{ ...event, value: 7 }} />
        {/each}
    </div>
    <div class="page-half">
        <CardNews
            cardInfo={{
                title: "Выборы руководителя ПО AITU VOLUNTEERS!",
                date: "23.01.2024",
            }}
        />
        <CardNews
            cardInfo={{
                title: "Поступление новых волонтеров первашей!",
                date: "23.01.2024",
            }}
        />
        <h1 class="section-heading">Справочный уголок 📌</h1>
        <div class="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/M8yzPkg2C5Q?si=vEsRWR5d3YXZY_tR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
        <ul class="reference-list">
            <li>
                <ReferenceButton>
                    <img src={attachmenticon} alt="" slot="icon" />
                    <a href="https://github.com/Aitu-Volunteers">Правила</a>
                </ReferenceButton>
            </li>
            <li>
                <ReferenceButton>
                    <img src={helpicon} alt="" slot="icon" />
                    <a href="https://github.com/Aitu-Volunteers">FAQ</a>
                </ReferenceButton>
            </li>
            <li>
                <ReferenceButton>
                    <img src={githubicon} alt="" slot="icon" />
                    <a href="https://github.com/Aitu-Volunteers"
                        >Github проекта</a
                    >
                </ReferenceButton>
            </li>
        </ul>
    </div>
</main>
