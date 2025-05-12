// Event Handling: Button click to change color and text
const button = document.getElementById('changeColorBtn');
button.addEventListener('click', function() {
    button.style.backgroundColor = 'lightblue';
    button.innerHTML = 'You clicked me!';
});

// Hover effects are handled in CSS with button:hover

// Keypress detection
document.addEventListener('keydown', (event) => {
    console.log(`You pressed the "${event.key}" key!`);
});

// Secret action for double-click (Bonus)
button.addEventListener('dblclick', function() {
    alert('Double-clicked! Secret action activated!');
});

// Long press action (Bonus)
let timer;
button.addEventListener('mousedown', () => {
    timer = setTimeout(() => {
        alert('Long press detected!');
    }, 1000);
});
button.addEventListener('mouseup', () => {
    clearTimeout(timer);
});

// Image Gallery: Next Image functionality
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let index = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    index = (index + 1) % images.length;
    document.getElementById('currentImage').src = images[index];
});

// Accordion functionality
document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});

// Form validation
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('input', () => {
    if (!emailInput.value.includes('@')) {
        emailInput.setCustomValidity('Please enter a valid email');
    } else {
        emailInput.setCustomValidity('');
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        passwordInput.setCustomValidity('Password must be at least 8 characters');
    } else {
        passwordInput.setCustomValidity('');
    }
});

// Real-time feedback on the username field
const usernameInput = document.getElementById('name');
const feedback = document.createElement('span');
usernameInput.insertAdjacentElement('afterend', feedback);

usernameInput.addEventListener('input', () => {
    feedback.textContent = usernameInput.value.length >= 5 ? 'Looks good!' : 'Too short';
});
