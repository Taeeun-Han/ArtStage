// index.html 일반회원, 기업회원 버튼
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



// 기업회원 버튼 클릭 시 소셜로그인 섹션 사라짐
function fadeOut(element, callback) {
    element.style.opacity = 1; // 시작 전 요소를 불투명하게 설정

    (function fade() {
        if ((element.style.opacity -= .1) < 0) { // 점차 투명하게
            element.style.display = "none"; // 완전히 투명해지면 display를 none으로
            callback && callback(); // 콜백 함수 실행, 있을 경우
        } else {
            requestAnimationFrame(fade); // 다음 애니메이션 프레임에서 fade 함수를 계속 실행
        }
    })();
}

function fadeIn(element, display = 'flex') {
    element.style.opacity = 0; // 시작 전 요소를 투명하게 설정
    element.style.display = display; // display 속성을 설정하여 요소를 보이게 함

    (function fade() {
        var val = parseFloat(element.style.opacity);
        if (!((val += .1) > 1)) { // 점차 불투명하게
            element.style.opacity = val;
            requestAnimationFrame(fade); // 다음 애니메이션 프레임에서 fade 함수를 계속 실행
        }
    })();
}

document.addEventListener('DOMContentLoaded', function () {
    var normalUserBtn = document.getElementById('normalUserBtn');
    var corporateUserBtn = document.getElementById('corporateUserBtn');
    var socialLogin = document.querySelector('.social-login');

    fadeIn(socialLogin); // 페이지 로드 시 .social-login 보이도록 설정

    normalUserBtn.addEventListener('click', function () {
        fadeIn(socialLogin); // 일반회원 버튼 클릭 시 fadeIn 효과
    });

    corporateUserBtn.addEventListener('click', function () {
        fadeOut(socialLogin); // 기업회원 버튼 클릭 시 fadeOut 효과
    });
});



// 사업자등록증 첨부 input = file 디자인
document.getElementById('custom-button').addEventListener('click', function () {
    document.getElementById('real-file').click();
});

document.getElementById('real-file').addEventListener('change', function () {
    const fileName = document.getElementById('real-file').value.split('\\').pop();
    document.getElementById('custom-text').textContent = fileName ? fileName : "선택된 파일이 없습니다.";
});


// 알림페이지 tab
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {
        let currentTab = this.getAttribute('data-tab');
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));

        document.querySelector(`[data-tab="${currentTab}"]`).classList.add('active');
        document.getElementById(currentTab).classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // 슬라이드 클릭 이벤트 리스너 추가
    document.querySelectorAll('.profileSwiper .swiper-slide').forEach(function (slide) {
        slide.addEventListener('click', function () {
            // 모든 슬라이드에서 'on' 클래스 제거
            document.querySelectorAll('.mySwiper .swiper-slide').forEach(function (el) {
                el.classList.remove('on');
            });
            // 클릭된 슬라이드에 'on' 클래스 추가
            this.classList.add('on');
        });
    });
});