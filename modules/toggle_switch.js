
const toggleButton = document.getElementById('toggle-mode');


const switchMode = function() {
    document.documentElement.classList.toggle('light');
};

toggleButton.addEventListener('click',switchMode)

export { toggleButton, switchMode };