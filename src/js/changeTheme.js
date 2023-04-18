const themeButton = document.querySelector('.change_theme--btn');
const sunIcon = document.querySelector(".icon_sun");
const moonIcon = document.querySelector(".icon_moon");
const savedTheme = localStorage.getItem("theme");
const body = document.querySelector('body')

themeButton.addEventListener('click', toggleTheme);

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark_mode');

  if (body.classList.contains('dark_mode')) {
    localStorage.setItem('theme', 'dark');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    localStorage.setItem('theme', 'light');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

if (savedTheme === 'dark') {
  body.classList.add('dark_mode');
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
} else {
  body.classList.remove('dark_mode');
  sunIcon.style.display = 'block';
  moonIcon.style.display = 'none';
}
