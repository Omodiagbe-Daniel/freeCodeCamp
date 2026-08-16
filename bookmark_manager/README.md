# 🔖 Bookmark Manager

A simple and user-friendly Bookmark Manager built with HTML, CSS, and JavaScript. The application allows users to save website bookmarks, organize them into categories, view bookmarks by category, and delete bookmarks when they are no longer needed.

## ✨ Features

- Add bookmarks with a name, URL, and category
- Organize bookmarks into different categories
- View bookmarks belonging to a selected category
- Open saved bookmarks directly through their links
- Select a bookmark using a radio button
- Delete a selected bookmark
- Store bookmarks in the browser using Local Storage
- Retrieve saved bookmarks when the application is reopened
- Validate bookmark data retrieved from Local Storage
- Display a message when a category contains no bookmarks

## 🛠️ Technoogies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Local Storage API

## 📌 How It Works

### Adding a Bookmark

The user selects a category and provides the bookmark name and URL. The application creates a bookmark object containing the name, category, and URL.

Example:

```javascript
{
  name: "GitHub",
  category: "Work",
  url: "https://github.com"
}

The bookmark is then added to the bookmarks array and stored in the browser's Local Storage.

Viewing Bookmarks

When the user selects a category and clicks the view category button, the application retrieves the saved bookmarks and filters them based on the selected category.

The bookmarks belonging to the selected category are then dynamically displayed on the page.

Each displayed bookmark contains a radio button and a link that allows the user to visit the bookmarked website.

If the selected category does not contain any bookmarks, the application displays a "No Bookmarks Found" message.

Deleting a Bookmark

The user can select a bookmark using its radio button and click the delete button.

The application identifies the selected bookmark using its name and category, removes it from the bookmarks array, updates Local Storage, and removes the bookmark from the displayed list.

💾 Data Storage

The application uses the browser's Local Storage API to persist bookmark data.

Bookmarks are stored under the bookmarks key.

Before storing the bookmarks, the JavaScript array is converted into a JSON string using JSON.stringify().

localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

When the bookmarks are retrieved, the JSON string is converted back into JavaScript data using JSON.parse().

JSON.parse(localStorage.getItem("bookmarks"));

The application also validates the data retrieved from Local Storage to ensure that it contains a valid array of bookmark objects.

📂 Project Structure
bookmark_manager/
│
├── index.html
├── styles.css
├── script.js
└── README.md
🚀 Getting Started
Clone the Repository
git clone https://github.com/Omodiagbe-Daniel/freeCodeCamp.git
Navigate to the Project Directory
cd bookmark_manager
Run the Application

Open index.html in your web browser.

No backend server or database is required because the application uses the browser's Local Storage API to store bookmark data.

📚 What I Learned

Building this project helped me strengthen my understanding of JavaScript and apply different concepts in a practical application.

Some of the key concepts I practiced include:

Working with JavaScript arrays and objects
Using array methods such as push(), filter(), and findIndex()
DOM manipulation
Event listeners and event handling
Working with form inputs
Working with <select> elements and retrieving selected values
Dynamically creating HTML elements with JavaScript
Using querySelector() and querySelectorAll()
Working with radio buttons
Using innerHTML
Working with browser Local Storage
Using JSON.stringify() and JSON.parse()
Validating data retrieved from Local Storage
Updating the DOM based on user interactions
Managing application state with JavaScript
🔮 Future Improvements

Some improvements I would like to add in future versions include:

Edit existing bookmarks
Add bookmark search functionality
Validate bookmark URLs before saving them
Prevent duplicate bookmarks
Add a confirmation dialog before deleting a bookmark
Allow users to create and delete custom categories
Improve the overall user interface and accessibility
Make the application fully responsive across different screen sizes
🙏 Acknowledgements

This project was completed as part of the freeCodeCamp JavaScript curriculum. The project provided an opportunity to practice JavaScript fundamentals by building a functional application involving DOM manipulation, event handling, arrays, objects, and browser Local Storage.

👨‍💻 Author

Daniel Omodiagbe

Computer Engineering Graduate | Software Development Enthusiast
