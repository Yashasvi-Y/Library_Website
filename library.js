$(document).ready(function() {
    // Carousel functionality
    let carouselIndex = 0;
    function showNextImage() {
      const images = $('.carousel img');
      images.eq(carouselIndex).hide();
      carouselIndex = (carouselIndex + 1) % images.length;
      images.eq(carouselIndex).show();
    }
    setInterval(showNextImage, 3000);
  
    // Add more JS/jQuery functionality if needed
  });  

//   // Sample filter options for each filter type
// const filterOptions = {
//   "Language": ["English", "Spanish", "French", "German"],
//   "Genre": ["Fiction", "Non-Fiction", "Mystery", "Science Fiction"],
//   "Author": ["Author 1", "Author 2", "Author 3"],
//   "Publisher": ["Publisher 1", "Publisher 2", "Publisher 3"],
//   "ISBN": ["123456", "789101", "112131"],
//   "Popularity": ["Most Popular", "Least Popular", "Trending"],
//   "Character name": ["Character 1", "Character 2", "Character 3"],
//   "Country": ["USA", "Canada", "UK", "India"]
// };

// // Keep track of the current selected filter type
// let currentFilter = null;

// function selectFilter(element, filterType) {
//   // Set the current filter
//   currentFilter = filterType;

//   // Highlight the selected span and remove highlight from others
//   document.querySelectorAll(".search-options span").forEach(span => span.classList.remove("selected"));
//   element.classList.add("selected");

//   // Populate the dropdown based on the selected filter
//   showDropdownOptions(filterOptions[filterType]);
// }

// function showDropdownOptions(options) {
//   // Get the dropdown element (create if it doesn’t exist)
//   let dropdown = document.getElementById("filterDropdown");
//   if (!dropdown) {
//       dropdown = document.createElement("div");
//       dropdown.id = "filterDropdown";
//       dropdown.classList.add("dropdown");
//       document.querySelector(".search-bar").appendChild(dropdown);
//   }

//   // Clear existing options
//   dropdown.innerHTML = "";

//   // Populate dropdown with new options
//   options.forEach(option => {
//       const optionItem = document.createElement("div");
//       optionItem.classList.add("dropdown-option");
//       optionItem.textContent = option;
//       optionItem.onclick = () => selectOption(option);
//       dropdown.appendChild(optionItem);
//   });

//   // Show the dropdown
//   dropdown.style.display = "block";
// }

// function selectOption(option) {
//   // Set the selected option as the search input value
//   const searchInput = document.getElementById("searchInput");
//   searchInput.value = `${currentFilter}: ${option}`;

//   // Hide the dropdown after selecting an option
//   hideDropdown();
// }

// function hideDropdown() {
//   const dropdown = document.getElementById("filterDropdown");
//   if (dropdown) {
//       dropdown.style.display = "none";
//   }
// }

// function searchBooks() {
//   const searchInput = document.getElementById("searchInput").value;
//   console.log("Searching for:", searchInput);
//   // Add functionality to handle the search
// }

// document.addEventListener("click", function(event) {
//   const dropdown = document.getElementById("filterDropdown");

//   // Hide dropdown if clicked outside of it
//   if (dropdown && !dropdown.contains(event.target) && event.target.id !== "searchInput") {
//       hideDropdown();
//   }
// });

//Book Rating Js
document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
    star.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      const allStars = this.parentElement.querySelectorAll('.star');
      
      allStars.forEach(star => {
        star.classList.remove('selected');
      });

      for (let i = 0; i < value; i++) {
        allStars[i].classList.add('selected');
      }
    });
  });
});

// Continuous auto-slider for 'carousel-wrapper'
let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-wrapper');
function autoSlideCarousel() {
  carouselItems.forEach((item, index) => {
    item.style.opacity = index === carouselIndex ? "1" : "0";
    item.style.transition = "opacity 0.5s ease-in-out";
  });
  carouselIndex = (carouselIndex + 1) % carouselItems.length;
}
setInterval(autoSlideCarousel, 500);

// Sticky navbar
const navbar = document.querySelector('header');
const stickyNavbar = () => {
  if (window.scrollY > 0) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.width = '100%';
    navbar.style.zIndex = '9999';
  } else {
    navbar.style.position = 'relative';
  }
};
window.addEventListener('scroll', stickyNavbar);
