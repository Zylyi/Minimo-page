let = lifeBtn = document.querySelector('.button__life'),
    lifeBtnBody = document.querySelector('.lifestyle__button');
    loadContent = document.querySelector('.load__content'),
    message = document.getElementById('message'),
    sendBtn = document.getElementById('send');

lifeBtn.addEventListener('click', function() {
    lifeBtnBody.style.display = 'none';
    lifeBtn.style.display = 'none';

    if (lifeBtn.style.display == 'none') {
        loadContent.style.display = 'flex';
    }
});