<script>
  import { onMount } from "svelte";
  import Quill from "quill";
  //QUILL CSS
  import "quill/dist/quill.core.css";
  import "quill/dist/quill.snow.css";
  import "quill/dist/quill.bubble.css";

  onMount(() => {
    //Quill instance
    const quill = new Quill("#editor", {
      modules: {
        toolbar: "#toolbar-container",
      },
      placeholder: "Напишите пост...",
      theme: "snow", // or 'bubble'
    });

    //Buttons
    //Share
    document.querySelector(".share-btn").addEventListener("click", () => {
      //HTML
      console.log(quill.getSemanticHTML());

      //JSON
      // console.log(quill.getContents());
    });
    //Cancel
  });
</script>

<div class="wrapper">
  <div id="toolbar-container">
    <span class="ql-formats">
      <select class="ql-size"></select>
    </span>
    <span class="ql-formats">
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
      <button class="ql-strike"></button>
    </span>
    <span class="ql-formats">
      <select class="ql-color"></select>
      <select class="ql-background"></select>
    </span>
    <span class="ql-formats">
      <button class="ql-script" value="sub"></button>
      <button class="ql-script" value="super"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-header" value="1"></button>
      <button class="ql-header" value="2"></button>
      <button class="ql-blockquote"></button>
      <button class="ql-code-block"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-list" value="ordered"></button>
      <button class="ql-list" value="bullet"></button>
      <button class="ql-indent" value="-1"></button>
      <button class="ql-indent" value="+1"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-direction" value="rtl"></button>
      <select class="ql-align"></select>
    </span>
    <span class="ql-formats">
      <button class="ql-link"></button>
      <button class="ql-image"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-clean"></button>
    </span>
  </div>
  <div id="editor"></div>

  <div class="btn-group">
    <button class="btn share-btn">
      <img src="/src/assets/imgs/check-good-yes.svg" alt="yes" />
      Опубликовать
    </button>
    <button class="btn cancel-btn">
      <a class="btn-a" href="/events-feed">
        <img src="/src/assets/imgs/x-close-delete.svg" alt="no" />
        Отменить
      </a>
    </button>
  </div>
</div>

<style>
  #editor {
    border: 1px solid var(--gray);
    background-color: var(--textinput-background);
    border-radius: 10px;
  }

  #toolbar-container {
    border: none;
  }

  .btn-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 32px;
  }

  .btn-a {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .btn {
    border: none;
    border-radius: 8px;
    padding: 6px 16px;
    color: white;
    font-weight: 600;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .share-btn {
    background-color: var(--secondary);
  }

  .cancel-btn {
    background-color: var(--black);
  }
</style>
