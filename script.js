

  const userMenuButton = document.getElementById('userMenuButton');
  const userDropdown = document.getElementById('userDropdown');

  // Toggle dropdown visibility
  userMenuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up
    userDropdown.classList.toggle('hidden');
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function (event) {
    if (!userMenuButton.contains(event.target) && !userDropdown.contains(event.target)) {
      userDropdown.classList.add('hidden');
    }
  });

           