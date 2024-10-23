const buttons = document.querySelectorAll('button[id^="agendar"]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = '/pages/agendamentos.html';
    });
});

const agendarButton = document.getElementById('agendar-button');

agendarButton.addEventListener('click', function() {
    alert('Agendamento concluído!');
});

document.addEventListener("DOMContentLoaded", function() {
    // Select the navigation links
    const sobreNosLink = document.querySelector('a[href="#sobre-nos"]');
    const contatoLink = document.querySelector('a[href="#contato"]');

    // Function to handle smooth scrolling
    const smoothScroll = (targetId) => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Add click event listeners
    sobreNosLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        smoothScroll('#sobre-nos'); // Scroll to the "sobre-nos" section
    });

    contatoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        smoothScroll('#contato'); // Scroll to the "contato" section
    });
});
