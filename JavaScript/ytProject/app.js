const videos = [
  {
    title: "Afreen Afreen",
    channel: "Coke Studio",
    views: "5M views",
    category: "music",
    thumbnail: "./assets/images/afreenThumbnail.jpeg"
  },
  {
    title: "Come Home",
    channel: "Valorant",
    views: "1M views",
    category: "gaming",
    thumbnail: "./assets/images/valoThumbnail.jpeg"
  },
  {
    title: "JavaScript Basics",
    channel: "Code with Harry",
    views: "200K views",
    category: "education",
    thumbnail: "./assets/images/harryThumbnail.jpeg"
  },
  {
    title: "Breaking News Today",
    channel: "Ary News",
    views: "800K views",
    category: "news",
    thumbnail: "./assets/images/aryThumbnail.jpeg"
  },
  {
    title: "Long Time No See",
    channel: "Taimour Baig",
    views: "32M views",
    category: "music",
    thumbnail: "./assets/images/longThumbnail.jpeg"
  },
  {
    title: "JavaScript Advanced",
    channel: "Apna College",
    views: "700k views",
    category: "education",
    thumbnail: "./assets/images/apnaThumbnail.jpeg"
  },
  {
    title: "CS2 Official Trailer",
    channel: "GameSpot",
    views: "10M views",
    category: "gaming",
    thumbnail: "./assets/images/cs2Thumbnail.jpeg"
  },
  {
    title: "June Special",
    channel: "BBC News",
    views: "1.5M views",
    category: "news",
    thumbnail: "./assets/images/bbcThumbnail.jpeg"
  },
];

const videoContainer = document.getElementById("videoCont");
const searchInput = document.getElementById("searchInp");
const searchBtn = document.getElementById("searchBtn");
const categoryButtons = document.querySelectorAll(".category-bar button");

//creating cards for videos
function createVid(video) {
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

// displaying videos
function displayVideos(list) {
  videoContainer.innerHTML = list.map(createVid).join("");
}

//category filtering
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

// searching
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

displayVideos(videos);
