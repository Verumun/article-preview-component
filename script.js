const shareButtonEl = document.querySelector('.share-button');
const shareOptionEl = document.querySelector('.share-option')

shareButtonEl.addEventListener('click', function(){
    shareOptionEl.classList.toggle('active');
})