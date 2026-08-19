Shopping Cart

A responsive Shopping Cart application built with HTML, CSS, and JavaScript. The project demonstrates how to build an interactive shopping cart where users can browse products, add items to their cart, adjust quantities, view totals, and calculate applicable tax.

Features
Display available products with their names, prices, and categories.
Add products to the shopping cart.
Prevent duplicate cart entries by updating the quantity of an existing product.
Increase or decrease product quantities.
Remove products from the cart.
Display the number of items currently in the cart.
Automatically calculate the cart subtotal.
Calculate tax based on a configurable tax rate.
Calculate the final total including tax.
Format monetary values to two decimal places.
Dynamically update the cart interface using JavaScript.
Use JavaScript array methods such as forEach() and reduce().
Use object and array destructuring to work with product data.
Technologies Used
HTML5 – Structure and content
CSS3 – Styling and layout
JavaScript (ES6+) – Application logic and DOM manipulation
Concepts Practiced

This project was built to strengthen several important JavaScript concepts, including:

Array Methods

The project makes use of methods such as:

forEach()
reduce()

forEach() is used to iterate through products, while reduce() can be used to calculate values such as the total cost of items in the cart.

Destructuring

Product properties can be extracted directly from objects:

const { name, price } = product;

This makes it easier to work with individual properties without repeatedly accessing them through the object.

Template Literals

Template literals are used to dynamically generate IDs and HTML content:

`product-count-for-id${product.id}`
Ternary Operator

Conditional operations can be simplified using the ternary operator:

condition ? valueIfTrue : valueIfFalse;
Object-Oriented JavaScript

The project also demonstrates working with objects and class instances, including accessing values through this and calculating values such as tax.

DOM Manipulation

JavaScript is used to dynamically:

Create product elements.
Update cart quantities.
Change displayed totals.
Add and remove cart items.
Respond to user interactions.
Tax Calculation

The cart calculates tax using the configured tax rate.

For example:

((this.taxRate / 100) * amount).toFixed(2)

If the tax rate is 7.5% and the amount is $200:

7.5 / 100 = 0.075


0.075 × 200 = 15


Tax = $15.00

The .toFixed(2) method ensures that the result is displayed with two decimal places.

How It Works

When a user adds a product to the cart, the application checks whether that product already exists in the cart.

If the product is already present:

Product exists
      ↓
Find existing cart item
      ↓
Increase quantity
      ↓
Update displayed quantity

If the product is not already in the cart:

Product does not exist
      ↓
Create cart item
      ↓
Add it to the cart
      ↓
Update cart display

The application then recalculates the cart totals whenever the cart contents change.

Project Structure
shopping-cart/
│
├── index.html
├── styles.css
├── script.js
└── README.md
Getting Started
1. Clone the repository
git clone https://github.com/Omodiagbe-Daniel/freeCodeCamp.git
2. Navigate to the project directory
cd shopping-cart
3. Open the project

Open index.html in your browser.

Alternatively, if you're using VS Code, you can use the Live Server extension to run the project locally.

Usage
Browse the available products.
Click the Add to Cart button for a product.
Open the cart to view selected products.
Increase or decrease quantities as needed.
Remove products you no longer want.
Review the subtotal, tax, and final total.
Example

A cart containing:

Chocolate Cake     $10.00 × 2
Apple Pie           $15.00 × 1
Cookie               $5.00 × 3

would calculate the subtotal as:

$20.00 + $15.00 + $15.00 = $50.00

The applicable tax is then calculated from the subtotal, and the final total is displayed to the user.

Learning Objectives

The main goal of this project is to practice building a real-world interactive application using JavaScript.

By completing this project, I gained practical experience with:

JavaScript arrays and objects
Array iteration
forEach()
reduce()
Destructuring
Template literals
Ternary operators
Classes and object instances
DOM manipulation
Event handling
Dynamic HTML generation
Conditional logic
Mathematical calculations
Number formatting
Managing application state
Future Improvements

Possible improvements include:

Add product search and filtering.
Add product images.
Add local storage so cart items persist after refreshing the page.
Add a checkout page.
Add product quantity validation.
Add responsive mobile-first improvements.
Add animations when products are added or removed.
Connect the application to a backend and database.
Author

Daniel Omodiagbe Onosetale

Computer Engineering graduate with a foundation in software development and an interest in building practical software applications.

License

This project was created for learning and educational purposes under freeCodeCamp.
