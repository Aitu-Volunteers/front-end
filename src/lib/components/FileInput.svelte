<script>
    let fileName;
    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
    const click = (e) => {
        e.preventDefault();
        const fileInput = e.target.previousElementSibling;
        fileName = e.target.querySelector("span");
        fileInput.click();
    };

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (file.size < 2 * 1024 * 1024) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
        }
        let valueStore = e.target.value.match(regExp);
        fileName.innerHTML = valueStore;
    };
</script>

<div>
    <input type="file" on:change={uploadFile} hidden />
    <button on:click={click}>
        <span>Null</span>
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_677_1770)">
                <path
                    d="M5.28452 5.13248C5.97091 3.11331 7.82298 1.66667 10 1.66667C12.7614 1.66667 15 3.99421 15 6.86539C16.8409 6.86539 18.3334 8.41709 18.3334 10.3312C18.3334 11.614 17.663 12.7341 16.6667 13.3333M5.26726 5.17204C3.23385 5.45922 1.66669 7.27165 1.66669 9.46467C1.66669 10.8818 2.32119 12.1402 3.33306 12.9306"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6.66669 13.3333L10 10M10 10L13.3334 13.3333M10 10V18.3333"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_677_1770">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
        Сертификат
    </button>
</div>

<style>
    button {
        width: 100%;
        min-width: 200px;
        max-width: 280px;
        background: var(--secondary);
        border: none;
        padding: 4px 16px 4px 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--white);
        border-radius: var(--border10);
        cursor: pointer;
    }

    svg {
        margin: 0 0px;
    }

    span {
        background: var(--black);
        color: var(--gray);
        height: 100%;
        padding: 8px 12px;
        max-width: 50px;
        border-radius: var(--border10) 0 0 var(--border10);
        white-space: nowrap;
        text-overflow: clip;
        overflow: hidden;
    }
</style>
