// DOM Element ko select karna
const button = document.getElementById('changeBtn');
const paragraph = document.getElementById('text');

// Event Listener lagana
button.addEventListener('click', function() {
    // Text aur color change karna
    paragraph.textContent = 'Text ab change ho gaya hai!';
    paragraph.style.color = 'blue';
    button.style.color="red";
    button.innerText="clicked!";
    button.style.backgroundColor="Yellow";
});
button.addEventListener('mouseover', function() {
    // Text aur color change karna
    
    button.style.color="red";
    button.innerText="clicked!";
    button.style.backgroundColor="Yellow";
});

button.addEventListener('mouseout', function() {
    // Text aur color change karna
    
    button.style.color="";
    button.innerText="Text Badlo";
    button.style.backgroundColor="";
});


