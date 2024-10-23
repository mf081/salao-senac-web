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
