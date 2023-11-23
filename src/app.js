const menuIcon = document.getElementById('menuIcon');
const menuContent = document.getElementById('menuContent');

menuIcon.addEventListener('click', () => {
  menuContent.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  const isClickInsideMenu = menuContent.contains(event.target);
  const isClickOnMenuIcon = menuIcon.contains(event.target);

  if (!isClickInsideMenu && !isClickOnMenuIcon) {
    menuContent.classList.add('hidden');
  }
});
