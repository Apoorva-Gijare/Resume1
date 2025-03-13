
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      // Hide all tab contents
      contents.forEach(content => content.classList.remove('active'));
      // Show the corresponding tab content
      document.getElementById(button.getAttribute('data-tab')).classList.add('active');
    });
  });
});
