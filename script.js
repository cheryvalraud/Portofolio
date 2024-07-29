
// Menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

// Clock update function
function updateClock() { 
    const now = new Date(); 
    let hours = now.getHours(); 
    const meridian = hours >= 12 ? 'PM' : 'AM'; 
    hours = hours % 12 || 12; 
    hours = hours.toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    const seconds = now.getSeconds().toString().padStart(2, '0'); 
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`; 
    document.getElementById("clock").textContent = timeString; 
} 
setInterval(updateClock, 1000);

// Text animation on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById('text-intro');
    const textContent = "Hello! I'm Valraud Chery, a Computer Science major at Bunker Hill Community College. With a passion for technology and a creative, open-minded approach, I thrive on developing innovative solutions to complex problems. My skill set includes proficiency in HTML, CSS, JavaScript, C++, and Java, allowing me to build dynamic and responsive web applications. I'm excited to leverage my technical expertise and creativity to contribute to the ever-evolving tech industry.";
    textElement.innerHTML = '';
    textContent.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char; // Handle spaces correctly
        span.style.animationDelay = `${index * 0.05}s`;
        textElement.appendChild(span);
    });
});









