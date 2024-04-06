

function showSideBar() {
    document.getElementById("sideBar").style.width = "250px";
  }

  function hideSideBar() {
    document.getElementById("sideBar").style.width = "0";
  }

   // Menu items data
   const menuItems = [
    { name: "Burger", imageSrc: "/img/food/burger.png", price: "R20" },
    { name: "Calamari", imageSrc: "/img/food/calamari.png", price: "R30" },
    { name: "Chicket Fillet", imageSrc: "/img/food/chicken-fillet.png", price: "R15" },
    { name: "Chocolate", imageSrc: "/img/food/chocolate.png", price: "R30" },
    { name: "Fish Salad", imageSrc: "/img/food/fish-salad.png", price: "R15" },
    { name: "Fries", imageSrc: "/img/food/fries.png", price: "R30" },
    { name: "Mojito", imageSrc: "/img/food/mojito.png", price: "R15" },
    { name: "RockShandy", imageSrc: "/img/food/rockshandy.png", price: "R30" },
    { name: "Salmond", imageSrc: "/img/food/salmond.png", price: "R15" },
];

// Function to generate menu items dynamically
function generateMenuItems() {
    const wrapper = document.getElementById('wrapper-grid');
    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-card');

        const img = document.createElement('img');
        img.src = item.imageSrc;
        img.alt = item.name;

        const menuDetailsDiv = document.createElement('div');
        menuDetailsDiv.classList.add('menu-details');

        const h2 = document.createElement('h2');
        h2.textContent = item.name;

        const span = document.createElement('span');
        span.textContent = item.price;

        menuDetailsDiv.appendChild(h2);
        menuDetailsDiv.appendChild(span);

        menuItemDiv.appendChild(img);
        menuItemDiv.appendChild(menuDetailsDiv);

        wrapper.appendChild(menuItemDiv);
    });
}

// Call the function to generate menu items
generateMenuItems();