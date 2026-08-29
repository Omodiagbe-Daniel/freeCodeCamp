# Decimal to Binary Converter

A simple web application that converts decimal numbers into their binary equivalents.

This project was built as part of my JavaScript learning journey to strengthen my understanding of **recursion, functions, conditionals, DOM manipulation, and number conversion**.

## Features

* Accepts a decimal number as input.
* Converts the decimal number to its binary representation.
* Displays the binary result directly on the page.
* Provides input validation.
* Handles invalid or unsupported input appropriately.
* Uses JavaScript to dynamically update the user interface.

## Technologies Used

* **HTML5** — Structure of the application
* **CSS3** — Styling and layout
* **JavaScript (ES6+)** — Application logic and DOM manipulation

## How It Works

The application takes a decimal number and repeatedly divides it by `2`.

For each division, the remainder is either `0` or `1`. These remainders are then used to construct the binary representation of the original number.

For example:

```text
Decimal: 10

10 ÷ 2 = 5 remainder 0
5  ÷ 2 = 2 remainder 1
2  ÷ 2 = 1 remainder 0
1  ÷ 2 = 0 remainder 1
```

Reading the remainders from bottom to top gives:

```text
1010
```

Therefore:

```text
10 (decimal) = 1010 (binary)
```

## What I Learned

Building this project helped me practice several important JavaScript concepts:

* Functions and function parameters
* Conditional statements
* Recursion
* Base cases and recursive cases
* DOM selection and manipulation
* Event handling
* Working with numbers
* Input validation
* Updating `textContent`
* Using JavaScript to dynamically control a webpage

### Recursion

One of the main concepts practiced in this project was **recursion**.

A recursive function calls itself with a modified value until it reaches a condition known as the **base case**.

Understanding when a recursive function stops and how values are returned through the call stack was an important part of completing this project.

## Project Structure

```text
decimal-to-binary-converter/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/Omodiagbe-Daniel/freeCodeCamp.git
```

2. Navigate into the project directory:

```bash
cd decimal_to_binary_converter
```

3. Open `index.html` in your browser.

Alternatively, you can use the **Live Server** extension in VS Code to run the project locally.

## Example

If the user enters:

```text
25
```

The application returns:

```text
11001
```

because:

```text
25 = 16 + 8 + 1
   = 2⁴ + 2³ + 2⁰
   = 11001
```

## Future Improvements

Some improvements that could be added in the future include:

* Adding support for larger numbers
* Adding decimal-to-binary conversion animations
* Adding binary-to-decimal conversion
* Improving accessibility
* Adding more detailed error messages
* Adding a copy-to-clipboard feature
* Improving the overall visual design

## Author

**Daniel Omodiagbe**

This project is part of my ongoing journey to strengthen my JavaScript and software development skills.

---

⭐ If you found this project useful, feel free to explore the repository and check out my other projects.

