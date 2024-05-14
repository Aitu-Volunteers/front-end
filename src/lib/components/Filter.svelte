<script>
    // export let type = 1; // 1 -> Filter by 2 params, 2 ->  Filter by 4 params
  
    let params = [
      {
        title: "Основное",
        settings: [
          "Все ивенты",
          "Предстоящие",
          "Активные",
          "Завершенные",
          "Мои ивенты",
        ],
        selected: 0,
      },
      {
        title: "Дата",
        settings: ["Сначала новые", "Сначала старые"],
        selected: 0,
      },
      {
        title: "Длительность",
        settings: ["Сначала длинные", "Сначала короткие"],
        selected: 0,
      },
      {
        title: "Масштабность",
        settings: [
          "Все",
          "Вузовские",
          "Республиканские",
          "Международные в РК",
          "Международные",
        ],
        selected: 0,
      },
    ];
  
    function selectSetting(paramIndex, settingIndex) {
      params[paramIndex].selected = settingIndex;
      params = [...params]; // trigger reactivity
      console.log(`${params[paramIndex].title}: ${params[paramIndex].settings[settingIndex]}`); // triggered setting
      logSelectedSettings();
    }
  
    function logSelectedSettings() {
      const selectedSettings = params.map(param => ({
        title: param.title,
        selected: param.settings[param.selected]
      }));
      console.log("Settings:", selectedSettings);
    }
  </script>
  
  <div class="filter-container">
    <div class="filter-header">
      <div class="title">Фильтры</div>
      <img src=".././src/assets/imgs/filter_icon.svg" alt="icon" />
    </div>
    <div class="filter-body">
      <div class="filter-section">
        {#each params as param, paramIndex}
          <div class="section-title">
            {param.title}
          </div>
          <div class="section-settings">
            {#each param.settings as setting, settingIndex}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div 
                class="setting {param.selected === settingIndex ? 'selected' : 'unselected'}"
                on:click={() => selectSetting(paramIndex, settingIndex)}>
                {setting}
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .filter-container {
      max-width: 536px;
      padding: 36px;
      border-radius: 30px;
      box-shadow: var(--filterbox-shadow);
      display: flex;
      flex-direction: column;
      gap: 36px;
    }
  
    .filter-header {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  
    .filter-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  
    .section-title {
      font-size: 1.25rem;
      color: var(--dark-gray);
    }
  
    .section-settings {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
  
    .setting {
      padding: 4px 32px;
      border-radius: 20px;
    }
  
    .unselected {
      background-color: var(--filter-unselected);
      color: var(--dark-gray);
    }
  
    .selected {
      border: 2.5px var(--secondary) solid;
      color: var(--secondary);
      font-weight: 500;
    }
  
    .title {
      font-size: 1.5rem;
    }
  
    .setting:hover {
      cursor: pointer;
    }
  </style>
  