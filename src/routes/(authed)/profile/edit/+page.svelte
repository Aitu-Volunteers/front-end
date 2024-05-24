<script>
    import { enhance } from "$app/forms";
    import userImg from "$assets/imgs/profile-test.png";
    import Button from "$lib/components/Button.svelte";
    import TextInput from "$lib/components/TextInput.svelte";
    import Select from "$lib/components/Select.svelte";
    import RadioInput from "$lib/components/RadioInput.svelte";
    import TextArea from "$lib/components/TextArea.svelte";
    import FileInput from "$lib/components/FileInput.svelte";

    const items = [
        { title: "A1", value: "1" },
        { title: "A2", value: "2" },
        { title: "B1", value: "3" },
        { title: "B2", value: "4" },
        { title: "C1", value: "5" },
        { title: "C2", value: "6" },
    ];
</script>

<main class="flex profile-content" style="max-width: 900px; margin: 0 auto">
    <div class="flex mb30">
        <div class="profile-edit-image" style="margin: 0 60px 0 30px;">
            <img src={userImg} alt="user" />
            <button class="edit">
                <a href="/profile">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 14H14"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3 9.00007L9.66667 2.3334C10.2189 1.78112 11.1144 1.78112 11.6667 2.3334C12.2189 2.88569 12.2189 3.78112 11.6667 4.3334L5 11.0001L2.33334 11.6667L3 9.00007Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
            </button>
        </div>
        <div class="flex col">
            <div class="mb30">
                <span class="name-info">Мой профиль</span>
                <div class="edit-state">
                    редактирование
                    <svg
                        style="margin: 0 0 0 10px;"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13"
                            stroke="#6F6F6F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.5 11.5L17.5 3.50002C18.3284 2.67159 19.6716 2.67159 20.5 3.50002C21.3284 4.32845 21.3284 5.67159 20.5 6.50002L12.5 14.5L8 16L9.5 11.5Z"
                            stroke="#6F6F6F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div class="flex">
                <Button>Сохранить</Button>
            </div>
        </div>
    </div>
    <form method="post" class="" use:enhance style="width: 100%;">
        <div class="flex justify-between">
            <TextInput name="Имя" inputName="name" required={true} />
            <TextInput name="Фамилия" inputName="surname" required={true} />
            <TextInput name="ИИН" inputName="IIN" required={true} />
        </div>
        <div class="flex justify-between">
            <TextInput name="Телеграм тег" inputName="tag" required={true} />
            <TextInput name="Группа" inputName="group" required={true} />
            <RadioInput name="Пол" required={true} />
        </div>
        <div class="flex justify-between mb30">
            <TextArea name="О себе" inputName="bio" />
        </div>
        <label for="" class="edit-label">Владние языками</label>
        <div class="flex justify-between">
            <div>
                <Select name="английский" inputName="english" {items} />
                <FileInput />
            </div>
            <Select name="русский" inputName="russian" {items} />
            <Select name="казахский" inputName="kazakh" {items} />
            <Select name="Дополнительный" inputName="kazakh" {items} />
        </div>
    </form>
</main>
