<script>
    import logo from "$assets/imgs/logo-auth.png";
</script>

<main class="outer-wrap flex">
    <section class="half">
        <slot></slot>
    </section>
    <section class="half half-2">
        <img src={logo} alt="logo" class="auth-logo">
    </section>
</main>