// script.js

// ========== LOGIN FUNCTIONALITY ==========
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector("button a[href='dashboard.html']");
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = document.querySelector("input[placeholder='Email address or phone number']").value.trim();
      const pass = document.querySelector("input[placeholder='password']").value.trim();

      if (email === "" || pass === "") {
        alert("Please fill in all fields!");
        return;
      }

      // Basic mock login
      localStorage.setItem("currentUser", email);
      window.location.href = "dashboard.html";
    });
  }

  // ========== SIGNUP FUNCTIONALITY ==========
  const signUpBtn = document.querySelector(".sign");
  if (signUpBtn) {
    signUpBtn.addEventListener("click", () => {
      const firstName = document.querySelector("input[placeholder='First Name']").value.trim();
      const surname = document.querySelector("input[placeholder='Surname']").value.trim();
      const email = document.querySelector("input[placeholder='Mobile number or email address']").value.trim();
      const pass = document.querySelector("input[placeholder='New password']").value.trim();

      if (!firstName || !surname || !email || !pass) {
        alert("Please fill all fields to sign up!");
        return;
      }

      localStorage.setItem("user", JSON.stringify({ firstName, surname, email, pass }));
      alert("Account created successfully!");
      window.location.href = "index.html";
    });
  }

  // ========== DASHBOARD FUNCTIONALITY ==========
  if (window.location.pathname.includes("dashboard.html")) {
    setupDashboard();
  }
});

function setupDashboard() {
  const postInput = document.createElement("textarea");
  postInput.placeholder = "What's on your mind?";
  postInput.style.width = "100%";
  postInput.style.padding = "10px";
  postInput.style.borderRadius = "8px";
  postInput.style.border = "1px solid lightgray";
  postInput.style.marginBottom = "10px";

  const postBtn = document.createElement("button");
  postBtn.innerText = "Post";
  postBtn.style.background = "#0866ff";
  postBtn.style.color = "white";
  postBtn.style.border = "none";
  postBtn.style.padding = "8px 15px";
  postBtn.style.borderRadius = "6px";
  postBtn.style.cursor = "pointer";

  const postContainer = document.createElement("div");
  postContainer.appendChild(postInput);
  postContainer.appendChild(postBtn);

  const feed = document.querySelector(".feed"); // Assuming feed container class
  if (feed) {
    feed.prepend(postContainer);
  }

  // Handle posting
  postBtn.addEventListener("click", () => {
    const text = postInput.value.trim();
    if (text === "") {
      alert("Write something before posting!");
      return;
    }

    const post = document.createElement("div");
    post.classList.add("post");
    post.style.background = "white";
    post.style.borderRadius = "10px";
    post.style.padding = "10px";
    post.style.marginTop = "10px";
    post.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    post.innerHTML = `
      <p>${text}</p>
      <button class="like-btn">👍 Like <span class="like-count">0</span></button>
    `;

    feed.prepend(post);
    postInput.value = "";
  });

  // Like functionality (event delegation)
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-btn")) {
      const likeCount = e.target.querySelector(".like-count");
      let count = parseInt(likeCount.textContent);
      if (e.target.classList.toggle("liked")) {
        count++;
        e.target.style.color = "#0866ff";
      } else {
        count--;
        e.target.style.color = "black";
      }
      likeCount.textContent = count;
    }
  });

  // Story functionality
  const storyBtn = document.createElement("button");
  storyBtn.innerText = "Add Story";
  storyBtn.style.background = "#36a420";
  storyBtn.style.color = "white";
  storyBtn.style.border = "none";
  storyBtn.style.padding = "8px 15px";
  storyBtn.style.borderRadius = "6px";
  storyBtn.style.marginTop = "10px";

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";

  feed.prepend(storyBtn);
  feed.prepend(fileInput);

  storyBtn.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = document.createElement("img");
        img.src = event.target.result;
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.borderRadius = "10px";
        img.style.marginRight = "10px";

        let storyContainer = document.querySelector(".story-container");
        if (!storyContainer) {
          storyContainer = document.createElement("div");
          storyContainer.classList.add("story-container");
          storyContainer.style.display = "flex";
          storyContainer.style.marginBottom = "15px";
          feed.prepend(storyContainer);
        }

        storyContainer.prepend(img);
      };
      reader.readAsDataURL(file);
    }
  });
}
