const noticeBtn = document.getElementById('noticeBtn');
const noticeModal = document.getElementById('noticeModal');
const closeBtn = document.getElementById('closeBtn');

noticeBtn.addEventListener('click', function() {
    noticeModal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    noticeModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === noticeModal) {
        noticeModal.style.display = 'none';
    }
});