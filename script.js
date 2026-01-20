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

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];

function showRickroll() {
    const overlay = document.getElementById('rickroll-overlay');
    const video = document.getElementById('rickroll-video');
    overlay.style.display = 'flex';
    video.play();
}

function closeRickroll() {
    const overlay = document.getElementById('rickroll-overlay');
    const video = document.getElementById('rickroll-video');
    overlay.style.display = 'none';
    video.pause();
    video.currentTime = 0;
}

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-4);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showRickroll();
        konamiCode = [];
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.launcher-card, .ip-card');

    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
