<script>
  import { onMount } from "svelte";
  import Quill from "quill";
  import "quill/dist/quill.core.css";
  import "quill/dist/quill.snow.css";
  import TextInput from "$lib/components/TextInput.svelte";

  let quill;

  // Function to get cookies
  function getCookies() {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [name, value] = cookie.split("=");
      acc[name] = decodeURIComponent(value);
      return acc;
    }, {});
    return cookies;
  }

  // Get JWT token from cookies
  const jwt_token = getCookies().id_token;

  // Function to upload file to the server
  async function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://64.227.184.121:8181/api/v1/post/upload-image",
        {
          method: "POST",
          body: formData,
          mode: "cors",
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      // Check if the response is JSON, if not return the text response
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload image");
    }
  }

  // Handler for image button in the Quill toolbar
  function imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const link = await uploadFile(file);
      // Insert a base64 version of the image temporarily
      const reader = new FileReader();
      reader.onload = (e) => {
        const range = this.quill.getSelection();
        this.quill.insertEmbed(range.index, "image", link);
      };
      reader.readAsDataURL(file);
    };
  }

  // Function to handle the share button click
  async function handleShare() {
    console.log("HTML Content:", quill.getSemanticHTML());

    // Retrieve the value of the form field named "post-title"
    const title = document.querySelector("input[name='post-title']").value;
    // Check if title or quillContent is empty
    if (!title) {
      alert("Please enter a title.");
      return;
    }

    if (quill.getSemanticHTML() === "<p></p>") {
      alert("Please write some content in the editor.");
      return;
    }
    // Create the post_data object
    const post_data = {
      title: title,
      description: "string",
      html: quill.getSemanticHTML(),
    };

    // Convert post_data to JSON string
    const jsonData = JSON.stringify(post_data);

    try {
      const response = await fetch("http://64.227.184.121:8181/api/v1/post", {
        method: "POST",
        body: jsonData,
        mode: "cors",
        headers: {
          Authorization: `Bearer ${jwt_token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to upload post");
      }

      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("Failed to upload post");
    }
  }

  // Initialize Quill editor on component mount
  onMount(() => {
    quill = new Quill("#editor", {
      modules: {
        toolbar: {
          container: [
            [{ size: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ script: "sub" }, { script: "super" }],
            [{ header: 1 }, { header: 2 }, "blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }, { align: [] }],
            ["link", "image"],
            ["clean"],
          ],
          handlers: {
            image: imageHandler,
          },
        },
      },
      placeholder: "Напишите пост...",
      theme: "snow",
    });

    // Add click event listener to the share button
    document.querySelector(".share-btn").addEventListener("click", handleShare);
  });
</script>

<div class="wrapper">
  <TextInput inputName={"post-title"} name={"Заголовок"} required={true} />
  <div id="editor"></div>
  <div class="btn-group">
    <button class="btn share-btn">
      <img src="/src/assets/imgs/check-good-yes.svg" alt="yes" />
      Опубликовать
    </button>
    <button class="btn cancel-btn">
      <a class="btn-a" href="/admin">
        <img src="/src/assets/imgs/x-close-delete.svg" alt="no" />
        Отменить
      </a>
    </button>
  </div>
</div>

<style>
  .wrapper {
    max-width: 536px;
    margin: auto;
  }

  #editor {
    border: 1px solid var(--gray);
    background-color: var(--textinput-background);
    border-radius: 10px;
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
