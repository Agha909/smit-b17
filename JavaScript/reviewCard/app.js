
let reviews = [
    {
        name: "Agha",
        img: "/images/pfp1.jpeg",
        text: "Amazing service! Highly recommended, will definitely come back again!"
    },
    {
        name: "HassamUddin",
        img: "/images/pfp2.jpeg",
        text: "Very professional behavior. Loved the atmosphere and the staff!"
    },
    {
        name: "Haseeb Khan",
        img: "/images/pfp3.jpeg",
        text: "Good experience overall. Some improvements can be made but I liked it!"
    }
];

let index = 0;

let pfp = document.getElementById("pfp");
let nameEl = document.getElementById("name");
let reviewEl = document.getElementById("review");

function loadReview(i) {
    pfp.src = reviews[i].img;
    nameEl.textContent = reviews[i].name;
    reviewEl.textContent = reviews[i].text;
}


loadReview(index);

document.getElementById("nextBtn").onclick = function() {
    index++;
    if (index > reviews.length - 1) {
        index = 0; 
    }
    loadReview(index);
};

document.getElementById("prevBtn").onclick = function() {
    index--;
    if (index < 0) {
        index = reviews.length - 1; 
    }
    loadReview(index);
};
