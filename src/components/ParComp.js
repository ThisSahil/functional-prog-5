import Q1 from "./Q1";
import Q10 from "./Q10";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
import Q7 from "./Q7";
import Q8 from "./Q8";
import Q9 from "./Q9";

const ParComp = () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      runtime: "2h 22m"
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford",
      runtime: "2h 55m"
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      runtime: "2h 32m"
    },
    {
      id: 4,
      title: "12 Angry Men",
      director: "Sidney Lumet",
      runtime: "1h 36m"
    }
  ];

  const items = [
    { id: 1, name: "Book", price: 10, category: "Stationary" },
    { id: 2, name: "T-Shirt", price: 15, category: "Clothes" },
    { id: 3, name: "Hat", price: 8, category: "accessories" },
    { id: 4, name: "Sunglasses", price: 12, category: "accessories" }
  ];

  const books = [
    {
      id: 1,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      rating: 7.8
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 8.1
    },
    {
      id: 3,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      rating: 9.3
    },
    {
      id: 4,
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      rating: 6.2
    }
  ];

  const employees = [
    { id: 1, name: "Abhay", department: "Marketing", salary: 20000 },
    { id: 2, name: "Joice", department: "HR", salary: 35000 },
    { id: 3, name: "Reena", department: "Technical", salary: 15000 },
    { id: 4, name: "Jeena", department: "Sales", salary: 50000 }
  ];

  const recepies = [
    { id: 1, name: "Rainbow Layer Cake", creator: "Shipra Khanna" },
    { id: 2, name: "Chilli Chocolate Fondue", creator: "Ripudaman Handa" },
    { id: 3, name: "Dhabe Di Dal", creator: "Nita Mehta" },
    { id: 4, name: "Chicken Quesadilla", creator: "Pawan Bisht" }
  ];

  const cars = [
    { id: 1, make: "Toyota", model: "Corolla", price: 200010 },
    { id: 2, make: "Honda", model: "Civic", price: 700012 },
    { id: 3, make: "Toyota", model: "Camry", price: 900015 },
    { id: 4, make: "Ford", model: "Mustang", price: 600018 }
  ];

  const students = [
    { id: 1, name: "Ramesh", grade: "B", attendance: "75%" },
    { id: 2, name: "Suresh", grade: "A", attendance: "89%" },
    { id: 3, name: "Rakesh", grade: "C", attendance: "70%" },
    { id: 4, name: "Sukesh", grade: "B", attendance: "90%" }
  ];

  const products = [
    { id: 1, name: "iPhone 13", price: 999, category: "Electronics" },
    { id: 2, name: "Kindle Paperwhite", price: 119, category: "Electronics" },
    { id: 3, name: "AirPods Pro", price: 249, category: "Electronics" },
    { id: 4, name: "Adidas Ultraboost 21", price: 180, category: "Shoes" },
    {
      id: 5,
      name: "Levi's 501 Original Fit Jeans",
      price: 69.5,
      category: "Clothing"
    },
    { id: 6, name: "Nintendo Switch", price: 299, category: "Electronics" },
    {
      id: 7,
      name: "Cuisinart Stainless Steel Cookware Set",
      price: 199.99,
      category: "Home & Kitchen"
    },
    {
      id: 8,
      name: "Nespresso Vertuo Coffee and Espresso Maker",
      price: 199,
      category: "Home & Kitchen"
    }
  ];

  const recipes = [
    {
      id: 1,
      name: "Spaghetti with Meatballs",
      ingredients: [
        "1 lb spaghetti",
        "1 lb ground beef",
        "1 cup breadcrumbs",
        "1 egg",
        "1/4 cup chopped parsley",
        "1/4 cup grated Parmesan cheese",
        "1/4 cup milk",
        "1/2 teaspoon salt",
        "1/2 teaspoon black pepper",
        "2 tablespoons olive oil",
        "1 onion, chopped",
        "3 cloves garlic, minced",
        "1 can (28 oz) crushed tomatoes",
        "1 teaspoon sugar",
        "1/4 teaspoon red pepper flakes",
        "1/4 cup chopped fresh basil"
      ],
      instructions: [
        "1. Cook the spaghetti according to package instructions until al dente.",
        "2. In a large bowl, combine the ground beef, breadcrumbs, egg, parsley, Parmesan, milk, salt, and pepper. Mix until well combined and form into meatballs.",
        "3. In a large skillet, heat the olive oil over medium heat. Add the onion and garlic and cook until softened, about 5 minutes.",
        "4. Add the crushed tomatoes, sugar, and red pepper flakes. Bring to a simmer and add the meatballs. Cover and simmer for 15-20 minutes, until the meatballs are cooked through.",
        "5. Serve the meatballs and sauce over the cooked spaghetti. Garnish with fresh basil."
      ]
    },
    {
      id: 2,
      name: "Chocolate Chip Cookies",
      ingredients: [
        "2 1/4 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1 teaspoon salt",
        "1 cup unsalted butter, at room temperature",
        "3/4 cup white sugar",
        "3/4 cup brown sugar",
        "2 large eggs",
        "2 teaspoons vanilla extract",
        "2 cups semisweet chocolate chips"
      ],
      instructions: [
        "1. Preheat the oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper.",
        "2. In a medium bowl, whisk together the flour, baking soda, and salt.",
        "3. In a large bowl, beat together the butter, white sugar, and brown sugar until light and fluffy, about 2-3 minutes.",
        "4. Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.",
        "5. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
        "6. Stir in the chocolate chips.",
        "7. Drop the dough by rounded tablespoons onto the prepared baking sheet, spacing the cookies about 2 inches apart.",
        "8. Bake for 10-12 minutes, until the edges are golden brown and the centers are set.",
        "9. Cool the cookies on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely."
      ]
    }
  ];

  return (
    <div>
      Hello
      {/* <Q1 movies={movies} /> */}
      {/* <Q2 items={items} /> */}
      {/* <Q3 books={books} /> */}
      {/* <Q4 employees={employees} /> */}
      {/* <Q5 recepies={recepies} /> */}
      {/* <Q6 cars={cars} /> */}
      {/* <Q7 students={students} /> */}
      {/* <Q8 movies={movies} /> */}
      {/* <Q9 products={products} /> */}
      <Q10 recipes={recipes} />
    </div>
  );
};

export default ParComp;
