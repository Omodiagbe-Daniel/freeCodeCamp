const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryButton = document.getElementById("view-category-button");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const categoryName = formSection.querySelector(".category-name");
const categoryDropdown = mainSection.querySelector("#category-dropdown");
const closeFormButton = formSection.querySelector("#close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const delBookmarkBtn = document.getElementById("delete-bookmark-button");

const getBookmarks = () => {
  try{
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (Array.isArray(bookmarks)) {
      for (let bookmark of bookmarks) {
        if (
          !(
            typeof bookmark === "object" &&
            bookmark !== null &&
            "name" in bookmark &&
            "category" in bookmark &&
            "url" in bookmark
          )
        ) {
          return [];
        }
      }
      return bookmarks;
    }
  return [];
  }
  catch (error) {
    return [];
  }
};
  
const bookmarkArr = getBookmarks();
let bookmarkObj = {};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}
const reset = () => {
    nameInput.value = "";
    categoryDropdown.value = "";
    urlInput.value = "";
}

addBookmarkButton.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
})

closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
})

addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();
  const taskObj = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value
  }
  bookmarks.push(taskObj);

  
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  reset();
  displayOrCloseForm();
})

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

viewCategoryButton.addEventListener("click", () => {
  categoryList.innerHTML = "";
  categoryName.innerText = categoryDropdown.value;
  const bookmarks = getBookmarks();
  const bookmarkArr = [];
  for (let bookmark of bookmarks) {
    if (bookmark.category === categoryDropdown.value) {
      bookmarkArr.push(bookmark);
    }
  }
  if (bookmarkArr.length === 0) {
      categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
    }
    else {
      for (let bookmark of bookmarkArr) {
        categoryList.innerHTML += `<input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark"/>
        <label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>
        `;
      }
    }
  displayOrHideCategory()
})

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
})

delBookmarkBtn.addEventListener("click", () => {
  let bookmarks = getBookmarks();
  const inputs = categoryList.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    if (input.checked) {
     bookmarks = bookmarks.filter(bookmark => bookmark.name !== input.value || bookmark.category !== categoryDropdown.value)
      input.nextElementSibling.remove();
      input.remove();  
    }
  })
  console.log(bookmarks)
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
})
