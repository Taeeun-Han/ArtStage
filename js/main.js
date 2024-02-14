document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.member button');
    const memberDiv = document.querySelector('.member');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // 모든 버튼의 'active' 클래스 제거 및 배경색 초기화
            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = '#f0f0f0';
            });

            // 클릭된 버튼에만 'active' 클래스 추가 및 배경색 변경
            this.classList.add('active');
            this.style.backgroundColor = '#ffffff';

            // "기업회원" 버튼 클릭 시 애니메이션 효과
            if (this.textContent === "기업회원") {
                memberDiv.style.justifyContent = 'flex-end';
            } else {
                memberDiv.style.justifyContent = 'flex-start';
            }
        });
    });
});