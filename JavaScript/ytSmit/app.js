const videos = [
  {
    title: "Top Gaming Moments",
    channel: "Gamer Zone",
    views: "500K views",
    category: "gaming",
    thumbnail: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
  },
  {
    title: "Relaxing Music Mix",
    channel: "Music World",
    views: "1M views",
    category: "music",
    thumbnail: "https://i.ytimg.com/vi/2OEL4P1Rz04/maxresdefault.jpg"
  },
  {
    title: "JavaScript Basics",
    channel: "Code Academy",
    views: "200K views",
    category: "education",
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg"
  },
  {
    title: "Breaking News Today",
    channel: "Daily News",
    views: "800K views",
    category: "news",
    thumbnail: "https://i.ytimg.com/vi/9Auq9mYxFEE/maxresdefault.jpg"
  },{
    title: "Top Gaming Moments",
    channel: "Gamer Zone",
    views: "500K views",
    category: "gaming",
    thumbnail: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
  },
  {
    title: "Relaxing Music Mix",
    channel: "Music World",
    views: "1M views",
    category: "music",
    thumbnail: "https://i.ytimg.com/vi/2OEL4P1Rz04/maxresdefault.jpg"
  },
  {
    title: "JavaScript Basics",
    channel: "Code Academy",
    views: "200K views",
    category: "education",
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg"
  },
  {
    title: "Breaking News Today",
    channel: "Daily News",
    views: "800K views",
    category: "news",
    thumbnail: "https://i.ytimg.com/vi/9Auq9mYxFEE/maxresdefault.jpg"
  }
  
];

const videoContainer = document.getElementById("videoContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const categoryButtons = document.querySelectorAll(".category-bar button");

/* CREATE CARD */
function createVideoCard(video) {
  return `
    <div class="video-card">
      <img src="${video.thumbnail}" alt="">
      <div class="video-info">
        <h4>${video.title}</h4>
        <p>${video.channel}</p>
        <p>${video.views}</p>
      </div>
    </div>
  `;
}

/* DISPLAY VIDEOS */
function displayVideos(list) {
  videoContainer.innerHTML = list.map(createVideoCard).join("");
}

/* CATEGORY FILTER */
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.cat;
    const filtered =
      category === "all"
        ? videos
        : videos.filter(video => video.category === category);
    displayVideos(filtered);
  });
});

/* SEARCH USING FIND + FILTER */
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();

  const result = videos.filter(video =>
    video.title.toLowerCase().includes(query)
  );

  if (result.length === 0) {
    videoContainer.innerHTML = "<h2>No videos found</h2>";
  } else {
    displayVideos(result);
  }
});

/* INITIAL LOAD */
displayVideos(videos);
