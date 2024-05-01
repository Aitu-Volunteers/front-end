<button>
    <slot />
</button>

<style lang="css">
    button {
        background-color: var(--secondary);
        color: var(--white);
        border: none;
        cursor: pointer;
        border-radius: var(--border20);
        min-width: 200px;
        padding: 10px 16px;
        max-width: 270px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
    }
</style>
