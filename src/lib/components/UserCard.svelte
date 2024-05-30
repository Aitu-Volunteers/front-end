<script>
    import userImg from "$assets/imgs/profile-test.png";
    import telegramIcon from "$assets/imgs/telegram.svg";

    export let user = {
        id: undefined,
        firstname: undefined,
        lastname: undefined,
        gender: undefined,
        barcode: undefined,
        telegram: undefined,
        group: undefined,
        kazakh: 0,
        russian: 0,
        english: 0,
        additionalLanguage: null,
        iin: undefined,
        team: {
            name: undefined,
            description: undefined,
        },
    };
</script>

<div class="card-wrapper">
    <div class="card-image">
        <img src={userImg} alt="user" />
    </div>
    <div class="card-content">
        <div class="user-name">{user.firstname} {user.lastname}</div>
        <div class="flex">
            <span>{user.group}</span>
            <span>{user.team ? user.team.name : null}</span>
            <span>{user.barcode}</span>
        </div>
        <div class="flex items-center">
            <img src={telegramIcon} alt="telegram" />
            <div class="tg-tag">{user.telegram}</div>
        </div>
    </div>
</div>

<style>
    .card-wrapper {
        border-radius: var(--border20);
        box-shadow: var(--filterbox-shadow);
        display: flex;
        padding: 20px;
        width: 100%;
        align-items: center;
    }

    .card-image img {
        width: 100px;
        height: 100px;
        margin: 0 20px 0 0;
        border-radius: 50%;
    }

    .user-name {
        font-weight: var(--semibold);
        color: var(--black);
        font-size: 1.25rem;
    }

    .card-content {
        color: var(--dark-gray);
    }

    .card-content span {
        color: var(--dark-gray);
        margin: 10px 0;
    }

    .card-content span:nth-child(2) {
        margin: 10px 20px;
    }

    .tg-tag {
        font-size: 1.125rem;
        color: #54bbdb;
        font-weight: 500;
        align-items: center;
        display: flex;
        margin: 0 10px;
    }
</style>
