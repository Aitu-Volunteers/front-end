<script>
    import Sidebar from "$lib/components/Sidebar.svelte";
    import PageHeader from "$lib/components/PageHeader.svelte";
    import NavbarMobile from "../../lib/components/NavbarMobile.svelte";
</script>

<div style="display: flex;">
    <Sidebar />
    <div class="sidebar-space"></div>
    <section style="width: 100%;">
        <PageHeader />
        <div class="page-content">
            <slot>
                <h1>Nothing to show here yet...</h1>
            </slot>
        </div>
        <NavbarMobile />
    </section>
</div>
