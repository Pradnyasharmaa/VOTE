const transitionButton = document.getElementById('transitionButton');
const transitionOverlay = document.getElementById('transitionOverlay');

transitionButton.addEventListener('click', function(event) {
  event.preventDefault();
  transitionOverlay.style.opacity = '1';
  setTimeout(function() {
    window.location.href = 'home.html'; // Replace 'another-page.html' with the URL of the page you want to transition to
  }, 500);
});
