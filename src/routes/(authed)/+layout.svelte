<script>
    import Button from "$lib/components/Button.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div style="display: flex;">
    <Sidebar />
    <div style="width: 100%">
        <form method="post" action="/logout">
            <Button />
        </form>

        <slot>
            <h1>Nothing to show here</h1>
        </slot>
    </div>
</div>
