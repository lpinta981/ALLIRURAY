document.addEventListener('DOMContentLoaded', function() {
    const verVideoBtn = document.getElementById('ver-video-btn');
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeBtn = document.querySelector('.close');
    const card = document.querySelector('.card');
    const startBtn = document.getElementById('start-btn');

    verVideoBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalVideo.pause();
        card.classList.remove('flipped');
    });

    modalVideo.addEventListener('ended', () => {
        card.classList.add('flipped');
    });

    startBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        window.location.href = 'dashboard.html';
    });
});