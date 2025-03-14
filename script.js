// Check user's system preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Get the toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Set initial mode based on system preference
if (prefersDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️'; // Sun icon for light mode
} else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';

    // Save user preference in localStorage
    localStorage.setItem('dark-mode', isDarkMode);
});

// Check localStorage for user preference
const savedDarkMode = localStorage.getItem('dark-mode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
} else if (savedDarkMode === 'false') {
    document.body.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙';
}