//  js for Menu bar
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const allCategories = document.getElementById("allCategories");
const closeBtn = document.querySelector(".mobileCrossButton");
const main = document.querySelector("main");


function toggleMenu() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

  const isOpen = offScreenMenu.classList.contains("active");
  // apply blur + lock scroll only when open
  if (main) main.classList.toggle("main-active", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

// function closeMenu() {
//   hamMenu.classList.remove("active");
//   offScreenMenu.classList.remove("active");
//   if (main) main.classList.remove("main-active");
//   document.body.style.overflow = "";
// }

hamMenu?.addEventListener("click", toggleMenu);
allCategories?.addEventListener("click", toggleMenu);
// closeBtn?.addEventListener("click", closeMenu);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

//Mobile Megamenu JS start here
const mobileHamMenu = document.querySelector(".nav-right .mobileHam-menu");
const mobilePopUp = document.querySelector(".nav-left");

// mobile Ham Menu for toggle
mobileHamMenu.addEventListener("click", () => {
  mobilePopUp.classList.add("mobileNav-LeftActive");
  main.classList.add("main-active");
  document.querySelector("body").style.overflow = "hidden";
});

// cross icon to close pop-up
const mobileCrossButton = document.querySelector(".nav-left .mobileCrossButton");
mobileCrossButton.addEventListener("click", function () {
  mobilePopUp.classList.remove("mobileNav-LeftActive");
  main.classList.remove("main-active");
  document.querySelector("body").style.overflow = "auto";
});

// js For All Categories Button When Clicked starts Here
document
  .querySelector(".nav-left .mobileMenuAll")
  .addEventListener("click", function (e) {
    const menuNavDiv = document.querySelector(".off-screen-menu .menuNav");
    const allCatArrow = document.querySelector(
      ".nav-left .mobileMenuAll .arrowDropMobile img"
    );
    const isOpenAll = menuNavDiv.classList.toggle("active");
    if (allCatArrow) {
      allCatArrow.style.transform = isOpenAll
        ? "rotate(270deg)"
        : "rotate(90deg)";
    }
  });
// js For All Categories Button When Clicked Ends Here
//Mobile Megamenu JS Ends here

// JS for Navlink
document.querySelectorAll(".navLink").forEach((link) => {
  link.addEventListener("click", function (e) {
    // console.log(this.textContent.trim());

    const clickedSubMenu = this.nextElementSibling;
    const parentUL = this.closest("ul");

    // Remove 'active' from sibling links and rotate back arrows
    parentUL
      .querySelectorAll(":scope > li > .navLink")
      .forEach((siblingLink) => {
        siblingLink.classList.remove("activeNavlink");
      });

    // Add 'active' to the clicked link
    this.classList.add("activeNavlink");

    // Rotate the arrow
    const arrowDrop = this.querySelector(".arrowDrop img");
    if (arrowDrop) {
      const isSubMenuVisible =
        clickedSubMenu && clickedSubMenu.style.display === "flex";
      arrowDrop.style.transform = isSubMenuVisible
        ? "rotate(0deg)"
        : "rotate(180deg)";
      if (window.innerWidth <= 1024) {
        arrowDrop.style.transform = isSubMenuVisible
          ? "rotate(90deg)"
          : "rotate(270deg)";
      }
    }

    // Toggle submenu
    if (clickedSubMenu && clickedSubMenu.tagName === "UL") {
      parentUL.querySelectorAll(":scope > li > ul").forEach((ul) => {
        if (ul !== clickedSubMenu) {
          ul.style.display = "none";
        }
      });
      clickedSubMenu.style.display =
        clickedSubMenu.style.display === "flex" ? "none" : "flex";
    }
  });
});

// JS for Expandable SearchBar
const input = document.getElementById("searchInput");
const suggestionBox = document.getElementById("suggestions");
const searchResults = document.querySelector("searchResults");
const navSearch = document.querySelector(".nav-search");
const bellIcon = document.querySelector(".nav-right .bellicon");
const blurMain = document.querySelector("main");
const headerSec = document.querySelector("header");
const allProducts = document.querySelectorAll(".product-box");
const resultCard = document.getElementById("search-result-card");
const peopleAlsoSearchList1 = document.querySelector(".peopleAlsoSearchList");
const peopleAlsoSearch = document.querySelector(".peopleAlsoSearch");
const searchButton = document.querySelector(".search-button");

//suggestions when focus
// const suggestions = [
//   "Nike Jordan Sneakers",
//   "Adidas Running Shoes",
//   "Yeezy",
//   "New Balance",
//   "Nike",
//   "Puma",
//   "Fila Shoes",
//   "White Sneakers",
//   "Nike Neon"
// ];

//when we open input or focus
input.addEventListener("focus", () => {
  handleSearch(input.value, true);
  suggestionBox.style.display = "block";
  resultCard.style.display = "none";
  peopleAlsoSearchList1.style.display = "none";
  peopleAlsoSearch.style.display = "none";
});

//when user type,paste,or delete
input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestionBox.innerHTML = "";

  if (value === "") {
    suggestionBox.style.display = "block";
    return;
  }

  // const filtered = suggestions.filter(item =>
  //   item.toLowerCase().includes(value)
  // );

  // if (filtered.length === 0) {
  //   suggestionBox.style.display = 'none';
  //   return;
  // }

  // filtered.forEach(item => {
  //   const li = document.createElement('li');
  //   li.textContent = item;
  //   li.addEventListener('click', () => {
  //     input.value = item;
  //     suggestionBox.style.display = 'none';
  //   });
  //   suggestionBox.appendChild(li);
  // });

  // suggestionBox.style.display = 'block';
});

// Optional: hide suggestions when clicking outside
// document.addEventListener('click', (e) => {
//   if (navSearch.contains(e.target)) {
//     searchResults.style.display = 'none';
//   }else{
//     searchResults.style.display = 'block';
//   }
// });

//
function handleSearch(query, forceOpen = false) {
  const input = query.trim().toLowerCase();
  const searchResultsContainer = document.getElementById("search-results");

  // Elements to update
  const imageEl = document.getElementById("result-image");
  const titleEl = document.getElementById("result-title");
  const priceEl = document.getElementById("result-price");
  const categoryEl = document.getElementById("result-category");
  const navRow = document.querySelector(".nav-left");

  // Handle UI open/close logic
  const shouldOpen = input !== "" || forceOpen;

  if (shouldOpen) {
    navSearch.classList.add("active");
    searchResultsContainer.classList.add("active");
    bellIcon.style.display = "none";
    navRow.style.display = "none";
    blurMain.classList.add("active");
    headerSec.style.overflow = "visible";
  } else {
    navSearch.classList.remove("active");
    searchResultsContainer.classList.remove("active");
    bellIcon.style.display = "block";
    navRow.style.display = "block";
    blurMain.classList.remove("active");
    headerSec.style.overflow = "hidden";

    // Also hide search result if there's no input
    searchResultsContainer.style.display = "none";
    return;
  }

  // Now do product matching
  let found = false;

  allProducts.forEach((product) => {
    const title = product.getAttribute("data-title") || "";
    const categoryE2 = product.getAttribute("data-category") || "";
    const price = product.getAttribute("data-price") || "";
    const imgSrc = product.getAttribute("data-img") || "";

    if (title.toLowerCase().includes(input) && !found) {
      imageEl.src = imgSrc;
      imageEl.alt = title;
      titleEl.textContent = title;
      priceEl.textContent = parseInt(price).toLocaleString();
      categoryEl.textContent = categoryE2;

      peopleAlsoSearchList1.style.display = "block";
      suggestionBox.style.display = "none";

      found = true;
    }
  });

  // Show or hide result card
  searchResultsContainer.style.display = found ? "block" : "none";
  resultCard.style.display = found ? "flex" : "none";
  peopleAlsoSearch.style.display = found ? "block" : "none";
}
