// DOM Element ko select karna
const button = document.getElementById('changeBtn');
const paragraph = document.getElementById('text');

// Event Listener lagana
button.addEventListener('click', function() {
    // Text aur color change karna
    paragraph.textContent = 'Text ab change ho gaya hai!';
    paragraph.style.color = 'blue';
    button.style.color="red";
    
});


