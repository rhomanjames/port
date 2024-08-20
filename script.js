function filterPlastics() {
    const searchInput = document.getElementById('searchInput').value.toUpperCase();
    const structureBearingFilter = document.getElementById('structureBearingFilter').value;
    const tempFilter = document.getElementById('tempFilter').value;
    const tensileStrengthFilter = document.getElementById('tensileStrengthFilter').value;
    const usdaFilter = document.getElementById('usdaFilter').value;
    const fdaFilter = document.getElementById('fdaFilter').value;

    const ul = document.getElementById('plasticItems');
    const li = ul.getElementsByTagName('li');
    let hasVisibleItems = false;

    for (let i = 0; i < li.length; i++) {
        const txtValue = li[i].textContent || li[i].innerText;
        const structureBearing = li[i].getAttribute('data-structure-bearing');
        const temp = li[i].getAttribute('data-temp');
        const tensileStrength = li[i].getAttribute('data-tensile-strength');
        const usda = li[i].getAttribute('data-usda');
        const fda = li[i].getAttribute('data-fda');

        if (
            (txtValue.toUpperCase().indexOf(searchInput) > -1) &&
            (structureBearingFilter === '' || structureBearing === structureBearingFilter) &&
            (tempFilter === '' || temp === tempFilter) &&
            (tensileStrengthFilter === '' || tensileStrength === tensileStrengthFilter) &&
            (usdaFilter === '' || usda === usdaFilter) &&
            (fdaFilter === '' || fda === fdaFilter)
        ) {
            li[i].style.display = '';
            hasVisibleItems = true; // At least one item matches the criteria
        } else {
            li[i].style.display = 'none';
        }
    }

    // Show or hide the "No Results Found" message
    const noResults = document.getElementById('noResults');
    if (hasVisibleItems) {
        noResults.style.display = 'none'; // Hide message if there are results
    } else {
        noResults.style.display = 'list-item'; // Show message if no results
    }
}
