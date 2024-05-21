<script>
    import { enhance } from '$app/forms';
    import Button from "$lib/components/Button.svelte";
    import TextInput from "$lib/components/TextInput.svelte";
    import Select from "$lib/components/Select.svelte";
    import RadioInput from "$lib/components/RadioInput.svelte";

    const items = ["Немецский", "Китайский", "Француский"];
</script>

<div class="register">
    <div class="heading">
        <h1>Добро пожаловать!</h1>
        <p>Чтобы завершить регистрацию, заполните поля ниже</p>
    </div>
    <form method="post" class="" use:enhance>
        <div class="flex justify-around">
            <TextInput name="Имя" inputName = "name" required={true} />
            <TextInput name="Фамилия" inputName = "surname" required={true} />
        </div>
        <div class="flex justify-around">
            <TextInput name="Телеграм тег" inputName = "tag" required={true} />
            <TextInput name="Группа" inputName = "group" required={true} />
        </div>
        <div class="flex justify-around">
            <TextInput name="ИИН" inputName = "IIN" required={true} />
            <TextInput name="Номер телефона" inputName = "phone" required={true} />
        </div>
        <div class="flex justify-around">
            <RadioInput name="Пол" required={true} />
            <Select name="Доп. язык" inputName = "add-lang" {items} />
        </div>
        <Button>Подтвердить</Button>
    </form>
</div>
