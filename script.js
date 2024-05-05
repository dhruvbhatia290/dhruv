// JavaScript code for handling form submissions and interactions
document.addEventListener('DOMContentLoaded', function() {
    const rideForm = document.getElementById('ride-form');
    const findRideForm = document.getElementById('find-ride-form');
    const searchResults = document.getElementById('search-results');

    rideForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Retrieve ride details from form
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const departureTime = document.getElementById('departure-time').value;
        const seatsAvailable = document.getElementById('seats-available').value;
        // TODO: Send ride details to server to offer a ride
        // Example: fetch('/offer-ride', { method: 'POST', body: { origin, destination, departureTime, seatsAvailable } });
        console.log('Offering ride:', origin, destination, departureTime, seatsAvailable);
        // Clear form fields after submission
        rideForm.reset();
    });

    findRideForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Retrieve search criteria from form
        const searchOrigin = document.getElementById('search-origin').value;
        const searchDestination = document.getElementById('search-destination').value;
        const searchDepartureTime = document.getElementById('search-departure-time').value;
        // TODO: Send search criteria to server to find rides
        // Example: fetch(`/find-ride?origin=${searchOrigin}&destination=${searchDestination}&departureTime=${searchDepartureTime}`);
        console.log('Searching for ride:', searchOrigin, searchDestination, searchDepartureTime);
        // Display search results (dummy data for demonstration)
        searchResults.innerHTML = `
            <h3>Search Results:</h3>
            <ul>
                <li>Origin: Dummy Origin | Destination: Dummy Destination | Departure Time: Dummy Time</li>
            </ul>
        `;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const numberForm = document.getElementById('numberForm');
    const displayNumber = document.getElementById('displayNumber');

    numberForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const phoneNumber = document.getElementById('phoneNumber').value;

        // Display the phone number
        displayNumber.innerHTML = `<p>Phone number: ${phoneNumber}</p>`;
        displayNumber.style.display = 'block';
        
        // Send the phone number to another person (dummy example)
        alert(`Phone number shared: ${phoneNumber}`);
    });
});
