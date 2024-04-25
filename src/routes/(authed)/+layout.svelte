<script>
    import Button from "$lib/components/Button.svelte";
</script>

<slot>
    <h1>Nothing to show here</h1>
</slot>

<form method="post" action="/logout">
    <Button/>
</form>