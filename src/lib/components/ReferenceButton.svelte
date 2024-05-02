<button>
    <div class="icon">
        <slot name="icon" />
    </div>
    <div class="text">
        <slot />
    </div>
</button>

<style>
    button {
        background-color: var(--black);
        color: var(--white);
        border: none;
        border-radius: var(--border20);
        padding: 8px 12px;
        width: 100%;
        min-width: 200px;
        max-width: 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        cursor: pointer;
    }

    .icon {
        width: min-content;
    }

    .text {
        width: 100%;
    }
</style>
