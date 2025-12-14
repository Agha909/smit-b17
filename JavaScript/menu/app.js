const menuItems = [
    { name: "Classic Pancakes", price: "PKR 850", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D", description: "Fluffy buttermilk pancakes with maple syrup.", category: "Breakfast" },
    { name: "Veggie Omelette", price: "PKR 750", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80", description: "Three-egg omelette with fresh veggies and cheese.", category: "Breakfast" },
    { name: "Avocado Toast", price: "PKR 900", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", description: "Crispy toast topped with avocado and seasonings.", category: "Breakfast" },
    { name: "Classic Cheeseburger", price: "PKR 1450", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80", description: "Juicy beef patty with cheddar and special sauce.", category: "Lunch" },
    { name: "Caesar Salad", price: "PKR 1100", img: "https://images.unsplash.com/photo-1669283714145-f97867f6c238?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Fresh romaine with parmesan and house dressing.", category: "Lunch" },
    { name: "Spaghetti", price: "PKR 1600", img: "https://plus.unsplash.com/premium_photo-1664472682525-0c0b50534850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BoYWdoZXR0aXxlbnwwfHwwfHx8MA%3D%3D", description: "Italian spaghetti with tomato basil sauce.", category: "Dinner" },
    { name: "Grilled Salmon", price: "PKR 2200", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80", description: "Fresh salmon grilled with herbs and lemon.", category: "Dinner" },
    { name: "Ribeye Steak", price: "PKR 3400", img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmliZXllJTIwc3RlYWt8ZW58MHx8MHx8fDA%3D", description: "Premium ribeye grilled to perfection.", category: "Dinner" },
    { name: "Iced Latte", price: "PKR 450", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80", description: "Chilled espresso with milk and ice.", category: "Beverages" },
    { name: "Fresh Orange Juice", price: "PKR 380", img: "https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwanVpY2V3fGVufDB8fDB8fHww", description: "Fresh squeezed orange juice.", category: "Beverages" },
    { name: "Chocolate Lava Cake", price: "PKR 650", img: "https://plus.unsplash.com/premium_photo-1723867233123-76f9c3e357ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwbGF2YSUyMGNha2V8ZW58MHx8MHx8fDA%3D", description: "Warm molten chocolate cake with vanilla ice cream.", category: "Dessert" },
];

const menuContainer = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const allBtn = document.getElementById("allBtn");
const breakfastBtn = document.getElementById("breakfastBtn");
const lunchBtn = document.getElementById("lunchBtn");
const dinnerBtn = document.getElementById("dinnerBtn");
const beveragesBtn = document.getElementById("beveragesBtn");

function generateCard(item) {
    return `
    <div class="food-card">
      <img src="${item.img}" alt="${item.name}" />
      <div class="card-body">
        <span class="tag">${item.category}</span>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.description}</p>
        <div class="price-row">
          <p class="price">${item.price}</p>
          <button class="add-btn">Add</button>
        </div>
      </div>
    </div>
  `;
}

function displayMenu(category = null) {
    const filteredItems = menuItems
        .filter(item => !category || item.category.toLowerCase() === category.toLowerCase())
        .map(generateCard);

    menuContainer.innerHTML = filteredItems.length ? filteredItems.join("") : "<h2>No Items Found</h2>";
}

function handleSearch() {
    const query = searchInput.value.toLowerCase();
    const results = menuItems.filter(item => item.name.toLowerCase().includes(query));
    menuContainer.innerHTML = results.length ? results.map(generateCard).join("") : "<h2>No Items Found</h2>";
}

displayMenu();

allBtn.addEventListener("click", () => displayMenu());
breakfastBtn.addEventListener("click", () => displayMenu("Breakfast"));
lunchBtn.addEventListener("click", () => displayMenu("Lunch"));
dinnerBtn.addEventListener("click", () => displayMenu("Dinner"));
beveragesBtn.addEventListener("click", () => displayMenu("Beverages"));
searchBtn.addEventListener("click", handleSearch);
