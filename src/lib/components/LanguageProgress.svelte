<script>
    export let language_name = "";
    export let level = 3;

    const level_mapping = {
        1: "A1",
        2: "A2",
        3: "B1",
        4: "B2",
        5: "C1",
        6: "C2"
    };

    level = Math.max(1, Math.min(level, 6)); // max - 6, min - 1
</script>

<p class="lang-name">{language_name} - {level_mapping[level]}</p>
<div class="bar-outer progress-bar">
    <div class="bar-inner progress-bar" style="width: {(level / 6) * 100}%;"></div>
</div>

<style>
    .lang-name {
        color: var(--dark-gray);
    }
    .progress-bar {
        height: 10px;
        max-width: 400px;
        border-radius: 10px;
    }
    .bar-outer {
        margin-top: 16px;
        background-color: var(--progressbar-background);
        width: 100%;
        position: relative;
    }
    .bar-inner {
        position: absolute;
        background-color: var(--progressbar);
    }
</style>