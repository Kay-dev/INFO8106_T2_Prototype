document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu dropdown
  const mobileMenuButton = document.querySelector('#mobile-dropdown-button');
  const mobileMenu = document.querySelector('#mobile-menu');

  mobileMenuButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('hidden')
  );

  // Profile dropdown
  const profileButton = document.querySelector('#user-menu-button');
  const profileDropdown = document.querySelector('#user-menu');

  profileButton.addEventListener('click', () =>
    profileDropdown.classList.toggle('hidden')
  );
});

document.querySelectorAll('.event-card')
  .forEach((el) => el.addEventListener('click', () => {
    window.location.href = 'event.html'
  }));

  document.querySelectorAll('.event-card button')
  .forEach((el) => el.addEventListener('click', (event) => {
    event.stopPropagation();
  }));
