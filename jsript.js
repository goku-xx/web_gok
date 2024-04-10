// Existing JavaScript code
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// New JavaScript code for food menu functionality
function showFoodDetails(name, features, calories) {
  var foodDetails = document.getElementById('foodDetails');
  foodDetails.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Features:</strong> ${features}</p>
    <p><strong>Calories:</strong> ${calories}</p>
  `;
  foodDetails.classList.remove('hidden');
}

document.getElementById('vegetarianBtn').addEventListener('click', function() {
  document.getElementById('vegetarianMenu').classList.remove('hidden');
  document.getElementById('nonVegetarianMenu').classList.add('hidden');
  document.getElementById('foodDetails').classList.add('hidden');
});

document.getElementById('nonVegetarianBtn').addEventListener('click', function() {
  document.getElementById('nonVegetarianMenu').classList.remove('hidden');
  document.getElementById('vegetarianMenu').classList.add('hidden');
  document.getElementById('foodDetails').classList.add('hidden');
});
