<script>
    import Button from "$lib/components/Button.svelte";
</script>

<div class="login">
    <h1>Добро пожаловать!</h1>
    <p>Что бы войти вы должны являться студентом АИТУ!</p>
    <Button>
        <a href="https://login.microsoftonline.com/158f15f3-83e0-4906-824c-69bdc50d9d61/oauth2/v2.0/authorize?client_id=8e43eadc-4f43-4434-b074-7dd9b8d46468&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000%2Fauth%2Fregister&response_mode=query&scope=openid&state=12345">OpenID connect</a>
    </Button>
</div>