const dropdownButton = document.getElementById('connectButton');
const dropdownContent = document.getElementById('dropdownContent');

dropdownButton.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});

