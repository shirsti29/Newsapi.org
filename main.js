// script.js

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    if (query) {
        alert('Searching for: ' + query);
        // Implement search functionality or API call here
    } else {
        alert('Please enter a search query.');
    }
});
