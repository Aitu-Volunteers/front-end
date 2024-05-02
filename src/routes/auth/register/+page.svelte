<script>
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
    <form method="post" class="">
        <div class="flex justify-around">
            <TextInput name="Имя" required={true} />
            <TextInput name="Фамилия" required={true} />
        </div>
        <div class="flex justify-around">
            <TextInput name="Телеграм тег" required={true} />
            <TextInput name="Группа" required={true} />
        </div>
        <div class="flex justify-around">
            <TextInput name="ИИН" required={true} />
            <TextInput name="Номер телефона" required={true} />
        </div>
        <div class="flex justify-around">
            <RadioInput name="Пол" required={true} />
            <Select name="Доп. язык" {items} />
        </div>
        <Button>Подтвердить</Button>
    </form>
</div>
