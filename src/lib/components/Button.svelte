<button>
    <slot />
</button>

<style>
    button {
        background-color: var(--secondary);
        color: var(--white);
        border: none;
        border-radius: var(--border20);
        padding: 12px 16px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
    }
</style>
