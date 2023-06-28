// Function to handle the logo click event
function handleLogoClick() {
 // Implement the functionality for the logo click event
 // Redirect the user to the home page or perform any desired action
}

// Function to handle navigation item clicks
function handleNavigationItemsClick(item) {
 // Implement the functionality for each navigation item click
 // Redirect the user to the respective page or perform any desired action based on the clicked item
 // Example: if (item === 'Home') {/* Redirect to the home page */ }
 // we can use conditional statements or switch case to handle each item
 if (item=== 'Home') {
  // Redirect to the home page
  window.location.href= 'home.html';
 } else if (item === 'Saved') {
  // Redirect to the saved page
  window.location.href =  'saved.html';
 } else if (item === 'Profile') {
  // Redirect to the profile page
  window.location.href= 'profile.html';
 } else if (item === 'Settings') {
  // Redirect to the setting page
  window.location.href = 'settings.html';
 }
}

// Function to handle the search form submission 
function handleSearchFormSubmit(event) {
 event.preventDefault();
 // Get the  search input values
 const location = document.getElementById('search-location').value;
 const priceRange = document.getElementById('search-price-range').value;
 const bedrooms = document.getElementById('search-bedrooms').value;
 const propertyType = document.getElementById('serach-property-type').value;
 //Perform search logic here based on the input value
 // We can use these values to filter and search properties from our data source
 const searchResults = properties.filter(property => {
  // Filter by location
  const matchesLocation =property.location.toLowerCase().includes(location.toLowerCase());
  // Filter by price range
  const matchesPriceRange = property.price <= parseInt(priceRange);
  // Filter by number of bedrooms
  const matchesBedrooms = property.bedrooms === parseInt(bedrooms);
  // Filter by property type
  const matchesPropertyType= property.propertyType.toLowerCase().includes(propertyType.toLowerCase());

  // Return true if all search criteria match, otherwise false
  return matchesLocation && matchesPriceRange && matchesBedrooms && matchesPropertyType;
 });
 // Update the UI with the search results dynamically
 function displaySearchResults(results) {
  const searchResultsContainer= document.getElementById('search-results-container');

  // Clear previous search results
  searchResultsContainer.innerHTML = '';

  if(results.length === 0) {
   // Display a message when no results are found
   const noResultsElement = document.createElement('p');
   noResultsElement.textContent= 'No results found.';
   searchResultsContainer.appendChild(noResultsElement);
  } else {
   // Loop through the search results and create HTML elements for each property
   results.forEach(property => {
    const propertyElement = document.createElement('div');
    propertyElement.classList.add('property');

    const imageElement= document.createImage('img');
    imageElement.src = property.image;
    imageElement.alt = property.title;
    imageElement.classList.add('property-image');
    propertyElement.appendChild(imageElement);

    const titleElement = document.createElement('p');
    titleElement.textContent = property.title;
    titleElement.classList.add('property-title');
    propertyElement.appendChild(titleElement);

    const locationElement = document.createElement('p');
    locationElement.textContent = property.location;
    locationElement.classList.add('property-location');
    propertyElement.appendChild(locationElement);

    const priceElement= document.createElement('p');
    priceElement.textContent = property.price;
    priceElement.classList.add('property-price');
    propertyElement.appendChild(priceElement);

    const viewDetailsButton= document.createElement('button');
    viewDetailsButton.textContent = 'view Details';
    viewDetailsButton.classList.add('view-details-button');
    propertyElement.appendChild(viewDetailsButton);

    // Append the property element to the search results container
    searchResultsContainer.appendChild(propertyElement);
   })
  }
 }
}

// Function to handle the category view more button click
function handleCategoryViewMoreClick(category) {
 // Implement the functionality to view more properties based on the clicked categories
 // Update the UI to display more properties or navigate to a separate page with all properties of the selected category

 // Example code to show a modal with more information
 const modal = document.getElementById('categoryModal');
 const modalTitle = modal.querySelector('.modal-title');
 const modalContent = modal.querySelector('.modal-content');

 // Set the modal title based on the clicked category
 modalTitle.textContent = `View More ${category.charAt(0).toUpperCase() + category.slice(1)}`;

 // Get the additional properties based on the clicked category
 const additionalProperties = getAdditionalProperties(category);

 // Build the HTML content for the modal dynamically
 let content = '';
 additionalProperties.forEach((property) => {
  content = + `
  <div class= "property-item">
  <img src = "${property.image} alt= "${property.title}">
  <h3> ${property.title}<\h3>
  <P> ${property.description}<\p>
  <button class="view-details" data-property-id= "${property.id}">View Details<\button>
  <\div>
  `;
 });

 // Set the modal content
 modalContent.innerHTML = content;

 // Show the modal
 modal.style.display = 'block';

 // Handle click event for the view details buttons in the modal
 const viewDetailsButtons = modal.querySelectorAll('.view-details');
 viewDetailsButtons.forEach((button) => {
  button.addEventListener('click', handleViewDetailsClick);
 });
}

// Function to handle the featured property view more button click
function handleFeaturedPropertyViewDetailsClick(propeprtyId) {
 // Implement the functionality to view the details of the clicked featured property
 // Update the UI to show the property details or navigate to a separate page with the property details

}

// Function to handle the popular destination click event
function handlePopularDestinationClick(destination) {
 // Implement the functionality for each popular destination click
 // Update the UI or navigate to a separate page related to the clicked destination
}

//  Function to handle the recently viewed property click event
function handleRecntlyViewedPropertyClick(propertyId) {
 // Implement the functionality to view the details of the clicked recently viewed property
 // Update the UI to show the property details or navigate to a separate page with the property details
}

// Function to handle the promotions view details button click
function handlePromotionViewDetailsClick(promotionId){
 // Implement the functionality to view the details of the clicked promotion
 // Update the UI to show the promotion details or navigate to a separate page with the promotion details
}

// Function to handle the the testimonial view more button click
function handleTestimonialViewMoreClick() {
 // Implement the functionality to show more testimonials
 // Update the UI to display additional testimonial or navigate to a separate page with all testimonials
}

// Function to handle the footer link clicks 
function handleFooterLinkClick(link) {
 // Implement the functionality for each footer link click
 // Redirect the user to the respective page or perform any desired action based on the clicked link
}

//Attach event listeners to the respective elememnts

// Logo click event
const logo = document.querySelector('#logo');
logo.addEventListener('click', handleLogoClick);

// Navigation item click events
const navigationItems =document.querySelectorAll('.navigationtion-item');
navigationItems.forEach((item) => {
 item.addEventListener('click', () => {
  handleNavigationItemsClick(item.innerText);
 });
});

// Search form submission 
const searchForm = document.querySelector('#seaarch-form');
searchForm.addEventListener('submit', handleSearchFormSubmit);

// Category view more button click events
const categoryViewMoreButtons = document.querySelectorAll('.category-view-more');
categoryViewMoreButtons.forEach((button) => {
 button.addEventListener('click', () => {
  handleCategoryViewMoreClick(button.dataset.category);
 });
});

// Featured property view dtails button click events
const featuredPropertyButtons= document.querySelectorAll('.feature-property-view-details');
featuredPropertyButtons.forEach((button) => {
 button.addEventListener('click', () => {
  handleFeaturedPropertyViewDetailsClick(button.dataset.propertyId);
 });
});

// Popular destination click events
const popularDestinations =document.querySelectorAll ('.popular-destination');
popularDestinations.forEach((destination) => {
 destination.addEventListener('click', () => {
  handlePopularDestinationClick(destination.dataset.destination);
 });
});

// Recently view property click events
const recentlyViewedProperties = document.querySelectorAll('.recently-viewed-property');
recentlyViewedProperties.forEach((property) => {
 property.addEventListener('click', () => {
  handleRecentlyViewedPropertyClick(property.dataset.propertyId);
 });
});

// Promotion View details button click events
const promotionButtons = document.querySelectorAll('.promotion-view-details');
promotionButtons.forEach((button)=> {
 button.addEventListener('click', () => {
  handlePromotionViewDetailsClick(button.dataset.promotionId);
 });
});

// Testimonial view more button click event
const testimonialViewMoreButton= document.querySelector('#testimonial-view-more');
testimonialViewMoreButton.addEventListener('click', handleTestimonialViewMoreClick);

// Footer link click events
const footerLinks = document.querySelectorAll('.footer-link');
footerLinks.forEach((link) => {
 link.addEventListener('click', () => {
  handleFooterLinkClick(link.innerText);
 });
});
