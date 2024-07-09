// Sample data with URLs
const data = [
    { name: "Apple", url: "apple.html" },
    { name: "Banana", url: "banana.html" },
    { name: "Orange", url: "orange.html" },
    { name: "Mango", url: "mango.html" },
    { name: "Grapes", url: "grapes.html" },
    { name: "Pineapple", url: "pineapple.html" }
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    const filteredData = data.filter(item => item.name.toLowerCase().includes(query));

    if (filteredData.length > 0) {
        searchResults.style.display = 'block';
        filteredData.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.name;
            div.classList.add('resultItem');
            div.addEventListener('click', () => {
                window.location.href = item.url;
            });
            searchResults.appendChild(div);
        });
    } else {
        searchResults.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    if (!searchResults.contains(event.target) && !searchInput.contains(event.target)) {
        searchResults.style.display = 'none';
    }
});
