function copyIP() {
    const ipInput = document.getElementById('server-ip');
    const copyBtn = document.querySelector('.copy-btn');

    ipInput.select();
    ipInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(ipInput.value).then(() => {
        copyBtn.classList.add('copied');

        setTimeout(() => {
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.launcher-card, .ip-card');

    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
