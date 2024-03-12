document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const additionalInfo = button.nextElementSibling;
            if (additionalInfo.style.maxHeight) {
                additionalInfo.style.maxHeight = null;
                button.innerText = 'More Info';
            } else {
                additionalInfo.style.maxHeight = additionalInfo.scrollHeight + 'px';
                button.innerText = 'Less Info';
            }
        });
    });
});
