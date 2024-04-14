document.addEventListener('DOMContentLoaded', function () {
    // Toggle mobile menu
    document.getElementById('mobileMenuToggle').addEventListener('click', function() {
        var navLinks = document.getElementById('navLinks');
        var isDisplayed = navLinks.style.display === 'block';
        navLinks.style.display = isDisplayed ? 'none' : 'block';
    });
});   

// Example roommates data
var roommates = [
    {
        "name": "Senthilnathan",
        "contactDetails": "878527673",
        "branch": "CSE Core",
      "special":"pure veg eater, respectful",
      "email":"asboy@gmail.com",
      "note":"I stay up till 4 am so adjust please",
    },
    {
        "name": "Alice Johnson",
        "contactDetails": "123456789",
        "branch": "EEE Core",
   "special":"9 pointer ",
      "email":"awesomeboy@gmail.com",
            "note":"dont play rock music in room",

    },
    {
        "name": "Bob Smith",
        "contactDetails": "987654321",
        "branch": "ME Core",
      "email":"asamboy@gmail.com",
      "special":"hindu, veg eater, non smoker ",
            "note":"lively environment in room needed",

    },
    // ... additional roommate objects
];
function openModal(roommate) {
    // Update modal content with the roommate's details
    document.getElementById('modalName').textContent = `Name: ${roommate.name}`;
    document.getElementById('modalPhone').textContent = `Phone: ${roommate.contactDetails}`;
    document.getElementById('modalEmail').textContent = `Email: ${roommate.email}`;
  document.getElementById('modalNote').textContent = `Special Note: ${roommate.note}`;

    // Display the modal
    document.getElementById('contactModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById('contactModal');
    if (event.target == modal) {
        closeModal();
    }
}
// Function to create card HTML
function createCard(roommate) {
      return `<article class="card" onclick="openModal(${JSON.stringify(roommate).split('"').join("&quot;")})">

                <div class="profile-pic"></div>
                <div class="info">
                    <p><strong>Name:</strong> ${roommate.name}</p>
                    <p><strong>Contact Details:</strong> ${roommate.contactDetails}</p>
                    <p><strong>Branch:</strong> ${roommate.branch}</p>
                     <p><strong>Preference:</strong> ${roommate.special}</p>
                </div>
            </article>`;
}

// Function to filter roommates based on the search query
// ... existing JavaScript code ...

// Function to filter roommates based on the search query and selected categories
function filterRoommates() {
    var searchQuery = document.getElementById('searchBar').value.toLowerCase();
    var isVeg = document.getElementById('veg').checked;
    var is9ptr = document.getElementById('9ptr').checked;
        var ismrng = document.getElementById('morning').checked;

    // Update this logic as needed to match your categories
    var filteredRoommates = roommates.filter(function(roommate) {
        var matchesSearchQuery = roommate.name.toLowerCase().includes(searchQuery) ||
                                 roommate.branch.toLowerCase().includes(searchQuery) ||
                                 roommate.special.toLowerCase().includes(searchQuery);
        var matchesVeg = !isVeg || roommate.special.toLowerCase().includes('veg');
        var matches9ptr = !is9ptr|| roommate.special.toLowerCase().includes('9');
           var matchesMorning = !ismrng|| roommate.special.toLowerCase().includes('morning'); 
        return matchesSearchQuery && matchesVeg && matches9ptr && matchesMorning;
    });
    
    displayRoommates(filteredRoommates);
}

// ... existing JavaScript code ...


// Function to display roommates on the page
function displayRoommates(roommatesList) {
    var cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''; // Clear the container
    roommatesList.forEach(function(roommate) {
        cardsContainer.innerHTML += createCard(roommate); // Add filtered roommates
    });
}

// Get the element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    closeModal();
}
// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before we try to attach event handlers
document.addEventListener('DOMContentLoaded', function () {
    // Toggle mobile menu
    document.getElementById('mobileMenuToggle').addEventListener('click', function() {
        var navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('show'); // Toggle a class that controls display
    });

    // Display all roommates initially
    displayRoommates(roommates);
});

