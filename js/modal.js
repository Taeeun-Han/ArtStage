document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        let rating = this.getAttribute('data-value'); // 현재 별의 data-value 값
        updateRatingText(rating); // 별점 텍스트 업데이트 함수 호출

        // 모든 별의 색을 기본값으로 초기화하고 선택된 별까지 색칠
        document.querySelectorAll('.star').forEach(s => {
            s.style.color = s.dataset.value <= rating ? '#ffd700' : '#ccc';
        });
    });
});

// 별점 텍스트 업데이트 함수
function updateRatingText(rating) {
    const ratingText = document.querySelector('.rating-text');
    ratingText.textContent = `별점 (${rating}/5)`; // 동적으로 별점 텍스트 업데이트
}