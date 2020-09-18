// title: { type: String, required: true },
//   description: { type: String, required: true },
//   ingredients: { type: String, required: true },
//   image: { type: String, required: true },
//   date: { type: String, required: true },
//   creator: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//     required: true,
//   },

let posts = [
  {
    title: "Spicy Ramen",
    description:
      "This spicy ramen is made in just about 15 minutes with a soy-ginger broth that’s perfectly spicy and savory. Perfect topped with soft boiled eggs, green onions, nori, or chicken, pork or tofu, it’s an excellent and budget friendly lunch.",
    ingredients:
      'four cups broth like chicken or vegetable broth, 1 cup water or additional cup broth, 1 1" knob ginger cut into 4 slices, 2 cloves garlic peeled and smashed, 1 tablespoon miso paste, 1 tablespoon sambal oelek, 2 tablespoons soy sauce, 2 teaspoons sesame oil, rice wine vinegar dash,2 blocks ramen or servings fresh ramen, 2 soft-boiled eggs sliced in half, scallions thinly sliced, black sesame seeds or togarashi, 1/2 piece nori thinly sliced, shredded or chopped chicken or pork or cubed tofu optional',
    instructions:
      "(1) Cook your eggs now or make them ahead of time and refrigerate until ready to use. (2) Combine broth, ginger, garlic, miso, sambal oelek, soy sauce, sesame oil, and vinegar in a saucepan. Bring everything to a boil. Reduce heat to let simmer and cook 10 minutes. Spoon out the ginger and garlic slices. (3) Add dried noodles and cook until soft. Divide noodles evenly between two bowls. Cover with broth and top with halved eggs, scallions, black sesame seeds or togarashi, and nori.",
    image: "https://40aprons.com/wp-content/uploads/2020/04/spicy-ramen-9.jpg",
    date: "9/4/20",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
  },
  {
    title: "Honey Siracha Chicken",
    description:
      "Sweet and spicy Chinese Honey Sriracha Chicken – better tasting and healthier than take out!",
    ingredients:
      "3-4 chicken breasts, diced, 1/3 cup corn starch1/3 cup corn starch, 1 cup water, 2-3 tablespoons sriracha (depending on how spicy you want it)2-3 tablespoons sriracha (depending on how spicy you want it), 5 tablespoons soy sauce5 tablespoons soy sauce, 1 tablespoon minced garlic1 tablespoon minced garlic, 1/4 cup sugar1/4 cup sugar 2-3 tablespoons honey (depending on how sweet you want it)2-3 tablespoons honey (depending on how sweet you want it), 2 tablespoons corn starch2 tablespoons corn starch, 2 tablespoons cold water2 tablespoons cold water, optional: crushed red pepper flakes, cooked rice for serving ",
    instructions:
      "(1) In a small-medium sauce pan, combine the 1 cup of water, sriracha, soy sauce, garlic, sugar, and honey and stir. Bring mixture to a boil over medium heat. (2) Whisk together the 2 tablespoons corn starch and remaining 2 tablespoons of water until dissolved. Add to sauce pan and stir until thickened. Reduce heat to low. (3) Add diced chicken and 1/3 cup corn starch to a large plastic bag. Seal the bag and shake to coat chicken. Drizzle a large pan or skillet with oil over medium heat. Add chicken and sauté until browned and chicken is cooked through. (4) Add the sauce and stir to coat. Sprinkle with crushed pepper flakes if desired and serve over warm rice.",
    image:
      "https://www.lecremedelacrumb.com/wp-content/uploads/2014/12/honey-sriracha-chicken-3.jpg",

    date: "2/1/20",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
  },
  {
    title: "Whole Wheat Banana Pancakes",
    description:
      "Delicious Whole Wheat Banana Pancakes with Cream Cheese Glaze are packed with bananas and topped with a tangy sweet glaze.",
    ingredients:
      "1 and 1/3 cups whole wheat flour, 1/4 teaspoon salt, 2 teaspoons baking powder, 1 teaspoon ground cinnamon, 1 large egg, 1 cup milk, 1/2 cup mashed banana about 1 large, very ripe banana, 2 Tablespoons dark brown sugar or light brown, 1/4 cup Greek yogurt, 1 teaspoon vanilla extract, 1/2 cup add-ins like chocolate chips nuts or fruit, optional",
    instructions:
      "(1) In a large bowl combine the flour, salt, baking powder, and cinnamon together. (2) In a separate bowl, whisk the egg, milk, and banana together. Whisk in the brown sugar and yogurt. Stir until ther are no lumpsn. Whisk in the vanilla until combined. (3) Pour the wet ingredients into the dry ingredients. Stir gently until just combined. Do not overmix. Add any mix-ins you prefer, but again - do not overmix the batter. (4) Heat a griddle or skillet over medium heat. Coat with a combination of half oil and butter. (5) Once hot, drop about 1/4 cup of batter on the griddle. Cook until the edges look dry and bubbles begin to form on the center or sides, about 2 minutes. Flip and cook on the other side until cooked through, about 1 more minute. (6) Keep pancakes warm in a preheated 200 degree oven until all pancakes are cooked. Serve immediately.",
    image:
      "https://www.callmepmc.com/wp-content/uploads/2014/10/Whole-Wheat-Banana-Pancakes-w_4951.jpg",

    date: "1/5/20",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
  },
  {
    title: "Seared Scallops",
    description:
      " Seared Scallops with a perfectly golden brown crust, just like at the restaurants! They’re incredibly simple to make at home and much cheaper than dining out.",
    ingredients:
      "1/2 lb dry sea scallops, salt, pepper, 1 tbsp avocado oil or other high smoke point oil, 2 tbsp butter",
    instructions:
      "(1) Preheat a cast iron skillet over medium high heat. (2) In the meantime, pat the scallops very dry with a paper towel. Sprinkle the sea scallops with salt and pepper, to season. (3) When the pan is hot, add the grapeseed oil, then drop in your scallops, giving them enough room in between so they don’t steam each other. The scallops should make a sizzling noise when you put them in the pan. (4) Cook the scallops for 2 minutes, making sure not to move them or touch them at all. (5) Flip the scallops over with a pair of tongs and add the butter to the pan. Let the scallops cook for 1 more minute, basting the scallops with the butter. (6) Remove the scallops from the pan and serve!",
    image:
      "https://www.fifteenspatulas.com/wp-content/uploads/2014/06/Seared-Scallops-Fifteen-Spatulas-640x959.jpg",

    date: "7/3/20",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
  },
  {
    title: "Salmon Lox",
    description:
      "Lox is a popular bagel topping in NYC. But it seems that many people from other parts of the country have never heard of it. And this is so sad, because salty smokey lox with cream cheese on a bagel is just so so good!",
    ingredients:
      "1 cup kosher salt, 1 1/2 - 2 lbs salmon filet, boneless, with the skin on, 1 cup sugar, 1/2 bunch dill, stemmed and leaves washed",
    instructions:
      "Rinse salmon filet and make sure all pin bones are removed. To do this, take small pliers or tweezers and pull the small bones out in the same direction they face. There are pin bones more often in wild salmon than in farmed salmon. (2) Cut the salmon in half, to make two equal-sized pieces. (3) Mix the salt and sugar in a bowl. On a plate or in a shallow dish, pile half of the mixture onto each half of the salmon. It will seem like there is extra mixture, but just pile it on. The salmon will absorb the mixture during the curing process. Next, place the dill on top. Sandwich the two pieces of fish together and wrap tightly with plastic wrap. (4) Place the fish into a gallon-sized Ziploc bag and push out all of the air. Now place in a shallow dish, such as a Pyrex baking dish. (5) Refrigerate, with weights on top, which is crucial. Use another heavy dish, bottles of wine–anything to weigh down the fish. (6) The lox will take 2-3 days to cure. At the end of each day, drain any liquid that has been extracted from the salmon and flip the salmon over, so that both sides are evenly weighed down. You can begin tasting it after 2 days. When it is cured to the desired taste, remove fish from plastic and rinse well. (7) To eat, slice thin on a bias, leaving the skin behind. Eat with your favorite cream cheese and bagel and enjoy. The cured lox freezes very well. Simply wrap well in plastic and place in a freezer bag to keep.",
    image:
      "https://www.babaganosh.org/wp-content/uploads/2015/01/a-IMG_8704.webp",

    date: "9/2/20",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
  },
  {
    title: "Chocolate Mousse",
    description:
      "This classic chocolate mousse is light yet intensely chocolate. Don’t be fooled by the French name — it’s quick and easy to make!",
    ingredients:
      "Heavy cream, Egg yolks, Vanilla extract, bittersweet chocolate, sea salt",
    instructions:
      "(1) Whip egg yolks and sugar: In medium mixing bowl using an electric hand mixer whip together egg yolks and granulated sugar on high speed until pale and fluffy, about 2 minutes. (2)  Heat 3/4 cup cream: Warm 3/4 cup of the heavy cream in a 2-quart saucepan on the stovetop over low heat until hot. (3) Temper eggs with cream mixture: While whisking egg mixture slowly pour in warm cream mixture to temper egg yolks. Then pour combined egg yolk and cream mixture back into saucepan. (4) Cook mixture to 160 degrees: Cook over low heat, whisking constantly, until mixture thickens just slightly and reaches 160 degrees on an instant read thermometer. If you notice any clumps strain through a sieve and return to saucepan.  (5) Melt in chocolate: Off heat add in chocolate, stir until melted. (6) Let cool to room temp: Pour mixture into a clean medium bowl, cover and chill, stirring about every 10 – 15 minutes until it reaches 70 degrees (or no longer warm), about 30 – 40 minutes total. (7) Whip remaining cream, fold into chocolate mixture: Whip remaining heavy cream until very stiff peaks form. Fold whipped cream into chocolate mixture until combined. (8) Divide mixture among dessert cups, chill: Pipe or spoon into dessert cups. Chill 2 hours. Top with sweetened whipped cream if desired and garnish with shaved or grated chocolate.",
    image:
      "https://www.onceuponachef.com/images/2019/04/Chocolate-Mousse-1200x1500.jpg",

    date: "8/4/20",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
  },
  {
    title: "Eggs Benedict",
    description:
      "Decadence is what makes eggs Benedict a star of the brunch table. To get there, order and timing are key. First, you'll want to make your hollandaise. While intimidating in theory, the process is a lot like making mayonnaise. If the emulsion is stable, it won't break, even when held at room temperature. Next, poach your eggs, and toast the English muffins while you crisp up the Canadian bacon. From there, it's as simple as stacking your ingredients and sprinkling them with herbs, salt and pepper. Once you’ve mastered this basic version, you can explore its variations: Add sliced avocado, or even swap in some smoked salmon (eggs Hemingway) or wilted greens for the Canadian bacon (eggs Florentine).",
    ingredients:
      "4 English muffins, split. 8 slices Canadian bacon or thick-cut ham (or 8 slices regular, thick-cut bacon), 2 tablespoons unsalted butter, ¼ cup chopped chives2 tablespoons chopped dill, tarragon or parsley, Flaky sea salt, Coarsely ground black pepper",
    instructions:
      "Cook the bacon: Heat a large skillet on medium low heat. Add the strips of bacon or the slices of Canadian bacon. Slowly fry, turning occasionally, until the bacon is browned on both sides, and if using strip bacon, much of the fat is rendered out (about 10 minutes).Use tongs or a fork to remove the bacon from the pan, set on a paper towel to absorb the excess fat. Don’t pour the bacon fat left in the pan down the drain! Either sop it up with paper towels when it has cooled a bit or pour it into a jar to be used later (see rendering bacon fat). 2 Bring poaching water to a simmer: While the bacon is cooking, bring a large saucepan two-thirds-filled with water to a boil, then add the vinegar. Bring the water to a boil again, then lower the heat to a bare simmer.3 Make Hollandaise sauce in blender: To make blender hollandaise, melt 10 Tbsp unsalted butter. Put 3 egg yolks, a tablespoon of lemon juice, 1/2 teaspoon salt in a blender, blend on medium to medium high speed for 20-30 seconds, until eggs lighten in color. Turn blender down to lowest setting, slowly dribble in the hot melted butter, while continuing to blend. Taste for salt and acidity and add more salt or lemon juice to taste. Transfer it to a container you can use for pouring and set it on a warm—but not hot—place on or near the stovetop. 4 Poach the eggs: Here is an easy method for poaching eggs. Essentially, working one egg at a time you crack an egg into a small bowl and slip it into the barely simmering water. Once it begins to solidify, you can slip in another egg, until you have all four cooking. Turn off the heat, cover the pan, and let sit for 4 minutes. (Remember which egg went in first, you'll want to take it out first.) When it comes time to remove the eggs, gently lift out with a slotted spoon. Note that the timing is a little variable on the eggs, depending on the size of your pan, how much water, how many eggs, and how runny you like them. You might have to experiment a little with your set-up to figure out what you need to do to get the eggs exactly the way you like them. 5 Toast English muffins: As soon as all the eggs are in the poaching water, begin toasting your English muffins. If you can’t get all the muffins toasted by the time the eggs are ready, gently remove the eggs from the poaching water and set in a bowl. 6 Assemble your Eggs Benedict: To assemble, butter one side of an English muffin. Top with two slices of bacon or 1 slice of Canadian bacon. You can trim the bacon to fit the muffin if you’d like. Put a poached egg on top of the bacon, then pour some hollandaise over. Sprinkle some parsley over it all and serve at once.",
    image:
      "https://static01.nyt.com/images/2018/11/21/dining/ar-eggs-benedict/ar-eggs-benedict-articleLarge.jpg",

    date: "9/17/20",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
  },
  {
    title: "Steak au Poivre",
    description:
      "Classic steak au poivre is a simple dish of seared peppercorn-crusted steaks with a creamy pan sauce. ",
    ingredients:
      "4 (3/4- to 1-inch-thick) boneless beef top-loin (strip) steaks (8 to 10 oz each), 1 tablespoon kosher salt, 2 tablespoons whole black peppercorns, 1 tablespoon vegetable oil, 1/3 cup finely chopped shallots, 1/2 stick (1/4 cup) unsalted butter, cut into 4 pieces, 1/2 cup Cognac or other brandy 3/4 cup heavy cream",
    instructions:
      "(1) Preheat oven to 200°F. Pat steaks dry and season both sides with kosher salt. (2) Coarsely crush peppercorns in a sealed plastic bag with a meat pounder or bottom of a heavy skillet, then press pepper evenly onto both sides of steaks. (4) Heat a 12-inch heavy skillet (preferably cast-iron) over moderately high heat until hot, about 3 minutes, then add oil, swirling skillet, and sauté steaks in 2 batches, turning over once, about 6 minutes per batch for medium-rare. (5) Transfer steaks as cooked to a heatproof platter and keep warm in oven while making sauce. (6) Pour off fat from skillet, then add shallots and half of butter (2 tablespoons) to skillet and cook over moderately low heat, stirring and scraping up brown bits, until shallots are well-browned all over, 3 to 5 minutes. (7) Add Cognac (use caution; it may ignite) and boil, stirring, until liquid is reduced to a glaze, 2 to 3 minutes. Add cream and any meat juices accumulated on platter and boil sauce, stirring occasionally, until reduced by half, 3 to 5 minutes. Add remaining 2 tablespoons butter and cook over low heat, swirling skillet, until butter is incorporated. Serve sauce with steaks.",
    image:
      "https://archive.commercialappeal.com/Services/image.ashx?domain=www.commercialappeal.com&file=carol_borchardt_13200143_ver1.0_640_480.jpg&resize=",

    date: "9/17/2o",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
  },
  {
    title: "Cacio e Pepe",
    description:
      'Literally "cheese and pepper", this minimalist cacio e pepe recipe is like a stripped-down mac and cheese.',
    ingredients:
      "Kosher salt, 6 oz. pasta (such as egg tagliolini, bucatini, or spaghetti), 3 Tbsp. unsalted butter, cubed, divided, 1 tsp. freshly cracked black pepper, ¾ cup finely grated Grana Padano or Parmesan, ⅓ cup finely grated Pecorino",
    instructions:
      "(1) Bring 3 quarts water to a boil in a 5-qt. pot. Season with salt; add pasta and cook, stirring occasionally, until about 2 minutes before tender. Drain, reserving ¾ cup pasta cooking water. (2) Meanwhile, melt 2 Tbsp. butter in a large heavy skillet over medium heat. Add pepper and cook, swirling pan, until toasted, about 1 minute. (3) Add ½ cup reserved pasta water to skillet and bring to a simmer. Add pasta and remaining butter. Reduce heat to low and add Grana Padano, stirring and tossing with tongs until melted. (4) Remove pan from heat; add Pecorino, stirring and tossing until cheese melts, sauce coats the pasta, and pasta is al dente. (Add more pasta water if sauce seems dry.) Transfer pasta to warm bowls and serve.",
    image:
      "https://assets.bonappetit.com/photos/57afff371b33404414976059/1:1/w_828,h_828,c_limit/cacio-e-pepe.jpg",

    date: "9/17/20",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
  },
  {
    title: "Perfect Banana Pudding",
    description:
      "Banana pudding is one of our all-time favorite desserts. It's a classic Southern recipe, and for good reason; luscious layers of pudding, whipped cream, ripe bananas, and wafer cookies are completely impossible to resist.",
    ingredients:
      "1/3 c. whole milk, (5.1-oz.) package instant vanilla pudding mix, (14-oz.) can sweetened condensed milk, 3 c. heavy cream, 1 tsp. pure vanilla extract, (12-oz.) box vanilla wafer cookies, 4 bananas, sliced into coins, 2 tsp. granulated sugar",
    instructions:
      "(1) In a large mixing bowl, combine milk, vanilla pudding mix and sweetened condensed milk. Whisk thoroughly, breaking up any lumps, and refrigerate for at least 5 minutes, or until set. (2) In another large bowl, combine heavy cream and vanilla. Beat until stiff peaks form, 2 to 3 minutes. Set aside half of the mixture for topping the dish. Fold remaining half into the pudding mixture. (3) Cover the bottom of a 3-quart trifle dish with vanilla wafers. Top with one-third of the pudding mixture. Cover with another layer of the wafer cookies—you may want to also stand some cookies up vertically, so you see the full circle along the edge of the trifle dish. Top with an even layer of banana slices. Continue layering the pudding, wafer cookies and banana slices until you reach the top, ending with a final layer of banana pudding. (4) Refrigerate for at least 3 hours, or up to overnight. (5) Sweeten the remaining whipped cream: Add sugar to whipped cream, stirring to combine. Just before serving, dollop on top of the banana pudding, then sprinkle crumbled wafer cookies on top.",
    image:
      "https://www.loavesanddishes.net/wp-content/uploads/2015/06/1-760-Banana-Pudding.jpg",

    date: "9/17/20",
    creator: "5f63e9bf8be9cdfbc52aaa1e",
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

module.exports = posts;
