let posts = [
  {
    id: 1,
    username: "mikealessi24",
    title: "Spicy Ramen",
    text:
      "This spicy ramen is made in just about 15 minutes with a soy-ginger broth that’s perfectly spicy and savory. Perfect topped with soft boiled eggs, green onions, nori, or chicken, pork or tofu, it’s an excellent and budget friendly lunch.",
    image: "https://40aprons.com/wp-content/uploads/2020/04/spicy-ramen-9.jpg",
    type: "Lunch",
    link:
      "https://40aprons.com/15-minute-spicy-ramen/#wprm-recipe-container-31160",
    date: "9/4/20",
  },
  {
    id: 2,
    username: "Aadams1",
    title: "Honey Siracha Chicken",
    text:
      "Sweet and spicy Chinese Honey Sriracha Chicken – better tasting and healthier than take out!",
    image: "https://40aprons.com/wp-content/uploads/2020/04/spicy-ramen-9.jpg",
    type: "Dinner",
    link:
      "https://www.lecremedelacrumb.com/wp-content/uploads/2014/12/honey-sriracha-chicken-3.jpg",
    date: "2/1/20",
  },
  {
    id: 3,
    username: "Bbook2",
    title: "Whole Wheat Banana Pancakes with Cream Cheese Glaze",
    text:
      "Delicious Whole Wheat Banana Pancakes with Cream Cheese Glaze are packed with bananas and topped with a tangy sweet glaze.",
    image:
      "https://www.callmepmc.com/wp-content/uploads/2014/10/Whole-Wheat-Banana-Pancakes-w_4951.jpg",
    type: "Breakfast",
    link:
      "https://www.callmepmc.com/whole-wheat-banana-pancakes-cream-cheese-glaze/",
    date: "1/5/20",
  },
  {
    id: 4,
    username: "Ccarr",
    title: "Seared Scallops",
    text:
      " Seared Scallops with a perfectly golden brown crust, just like at the restaurants! They’re incredibly simple to make at home and much cheaper than dining out.",
    image:
      "https://www.fifteenspatulas.com/wp-content/uploads/2014/06/Seared-Scallops-Fifteen-Spatulas-640x959.jpg",
    type: "Dinner",
    link:
      "https://www.fifteenspatulas.com/how-to-sear-scallops-wet-vs-dry-scallops/",
    date: "7/34/20",
  },
  {
    id: 5,
    username: "Ddawson",
    title: "Salmon Lox",
    text:
      "Lox is a popular bagel topping in NYC. But it seems that many people from other parts of the country have never heard of it. And this is so sad, because salty smokey lox with cream cheese on a bagel is just so so good!",
    image:
      "https://www.babaganosh.org/wp-content/uploads/2015/01/a-IMG_8704.webp",
    type: "Brunch",
    link: "https://www.babaganosh.org/how-to-cure-salmon-lox-recipe/",
    date: "9/2/20",
  },
  {
    id: 6,
    username: "Eearn",
    title: "Chocolate Mousse",
    text:
      "This classic chocolate mousse is light yet intensely chocolate. Don’t be fooled by the French name — it’s quick and easy to make!",
    image:
      "https://www.onceuponachef.com/images/2019/04/Chocolate-Mousse-1200x1500.jpg",
    type: "Dessert",
    link: "https://www.onceuponachef.com/recipes/chocolate-mousse.html",
    date: "8/4/20",
  },
];

// function getNextPostId() {
//   let id = 6;
//   if (posts[posts.length - 1].id == id) {
//     return id + 1;
//   }
// }

function getNextPostId() {
  return posts[posts.length - 1].id + 1;
}

function getDate() {
  let today = new Date();
  let date = `${today.getMonth() + 1}-${today.getDay()}-${today.getFullYear()}`;
  return date;
}

module.exports = { posts, getNextPostId, getDate };
