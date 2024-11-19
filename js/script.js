document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('like-btn');
    let likeCount = 0;

    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            likeCount++;
            document.getElementById('like-count').innerText = likeCount;
        });
    }
});
