 const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('show');
  });


// recipes page
// items

const recipes = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 30,
    img: "img/item-01.jpeg",
    desc: `Fluffy pancakes made with buttermilk, served with maple syrup and fresh berries.`
  },
  {
    id: 2,
    title: "Dinner double",
    category: "Lunch",
    price: 50,
    img: "img/item-02.jpeg",
    desc: `A hearty dinner with a double portion of your choice of protein, served with vegetables and potatoes.`
  },
  {
    id: 3,
    title: "Avocado Toast",
    category: "Breakfast",
    price: 25,
    img: "img/item-03.jpeg",
    desc: `Toasted bread topped with mashed avocado, cherry tomatoes, and a sprinkle of feta cheese.`
  },
  {
    id: 4,
    title: "Caesar Salad",
    category: "Lunch",
    price: 40,
    img: "img/item-04.jpeg",
    desc: `Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.`
  },
  {
    id: 5,
    title: "Chocolate Cake",
    category: "Dessert",
    price: 20,
    img: "img/item-05.jpeg",
    desc: `Rich and moist chocolate cake layered with creamy chocolate frosting.`
  },
  {
    id: 6,
    title: "Fruit Smoothie",
    category: "Beverages",
    price: 15,
    img: "img/item-06.jpeg",
    desc: `A refreshing blend of seasonal fruits, yogurt, and a touch of honey.`
  },
  { id: 7,
    title: "Grilled Chicken Sandwich",
    category: "Lunch",
    price: 45,
    img: "img/item-07.jpeg",
    desc: `Grilled chicken breast served on a toasted bun with lettuce, tomato, and mayo.`
  },
  {
    id: 8,
    title: "Lemonade",
    category: "Beverages",
    price: 10,
    img: "img/item-08.jpeg",
    desc: `Freshly squeezed lemonade with a hint of mint.`
  },
  {
    id: 9,
    title: "Tiramisu",
    category: "Dessert",
    price: 25,
    img: "img/item-09.jpeg",
    desc: `Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.`
  },
  
]

const sectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(recipes);
});
// filter buttons
filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = recipes.filter(function(menuItem){
    if(menuItem.category === category){
      return menuItem;
    }
  });
    if(category === "all"){
      displayMenuItems(recipes);
    } else {
      displayMenuItems(menuCategory);
    }
});
});







function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    //console.log(item);
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <div>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price} sek</h4>
            </div>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};