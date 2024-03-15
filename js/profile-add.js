// 제품 이미지 미리보기
document.getElementById('productImage').addEventListener('change', function () {
    const preview = document.getElementById('imagePreview');
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Image preview">`;
        };
        reader.readAsDataURL(file);
    }
});

// 내 소개 글자 수
document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');

    textInput.addEventListener('input', function () {
        const currentLength = this.value.length;
        charCount.textContent = `${currentLength}/35`; // 남은 글자 수 업데이트
    });
});


// 학력사항 추가
document.getElementById('addEdu').addEventListener('click', function () {
    // 새로운 .profile-edu-wrap 요소 생성
    const newEduWrap = document.createElement('div');
    newEduWrap.classList.add('profile-edu-wrap');
    newEduWrap.innerHTML = `
        <p></p>
        <div class="input-wrap">
            <input type="text"> - <input type="text">
            <input type="text">
        </div>
    `;

    // .profile-edu 컨테이너 선택
    const profileEdu = document.querySelector('.profile-edu');
    // 버튼 요소 선택
    const addEduButton = document.getElementById('addEdu');

    // 새로운 .profile-edu-wrap 요소를 버튼 위에 추가
    profileEdu.insertBefore(newEduWrap, addEduButton);
});


// 경력사항 추가
document.getElementById('addHistory').addEventListener('click', function () {
    // 새로운 .profile-history-wrap 요소 생성
    const newHistoryWrap = document.createElement('div');
    newHistoryWrap.classList.add('profile-history-wrap');
    newHistoryWrap.innerHTML = `
        <p></p>
        <div class="input-wrap">
            <input type="text"> ~ <input type="text">
            <input type="text">
        </div>
    `;

    // .profile-history 컨테이너 선택
    const profileHistory = document.querySelector('.profile-history');
    // 버튼 요소 선택
    const addHistoryButton = document.getElementById('addHistory');

    // 새로운 .profile-history-wrap 요소를 버튼 위에 추가
    profileHistory.insertBefore(newHistoryWrap, addHistoryButton);
});

// 활동사항추가
document.getElementById('addAwards').addEventListener('click', function () {
    // 새로운 .profile-awards-wrap 요소 생성
    const newAwardsWrap = document.createElement('div');
    newAwardsWrap.classList.add('profile-awards-wrap');
    newAwardsWrap.innerHTML = `
        <p></p>
        <div class="input-wrap">
            <input type="text"> ~ <input type="text">
            <input type="text">
        </div>
    `;

    // .profile-awards 컨테이너 선택
    const profileAwards = document.querySelector('.profile-awards');
    // 버튼 요소 선택
    const addAwardsButton = document.getElementById('addAwards');

    // 새로운 .profile-awards-wrap 요소를 버튼 위에 추가
    profileAwards.insertBefore(newAwardsWrap, addAwardsButton);
});


// 기타 자기소개
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('introduceText');
    const charCount = document.getElementById('charCount');
    const maxLength = textarea.getAttribute('maxlength');

    textarea.addEventListener('input', function () {
        const currentLength = this.value.length;
        const remaining = maxLength - currentLength;
        charCount.textContent = remaining;
    });
});


// 자격증 파일 업로드
function updateFileNameOnSelect(inputId, labelQuery) {
    const input = document.getElementById(inputId);
    if (!input) return; // 요소가 없으면 종료

    input.addEventListener('change', function () {
        const fileName = input.files.length > 0 ? input.files[0].name : '';
        const labelSpan = document.querySelector(labelQuery);
        if (labelSpan) {
            labelSpan.textContent = fileName || '여기를 눌러 파일을 업로드해주세요';
        }
    });
}

// 페이지 로드 시 기존 input[type="file"]에 이벤트 리스너 추가
updateFileNameOnSelect('file-upload', 'label[for="file-upload"] span');

document.getElementById('addQualification').addEventListener('click', function () {
    const uniqueId = Date.now();
    const newQualificationWrap = document.createElement('div');
    newQualificationWrap.classList.add('qualification-wrap');
    newQualificationWrap.innerHTML = `
      <p>자격 증명</p>
      <div class="input-wrap">
          <p>* 공연 안전 이수증 등 자격 사항을 올려주세요</p>
          <input type="text" placeholder="자격증명">
          <input type="text" placeholder="발행처">
          <input type="text" placeholder="취득년월(ex 2022. 01)">
          <label for="file-upload-${uniqueId}" class="custom-file-upload">
              <span>여기를 눌러 파일을 업로드해주세요</span>
          </label>
          <input id="file-upload-${uniqueId}" type="file" style="display: none;" />
      </div>
  `;

    document.querySelector('.qualification').insertBefore(newQualificationWrap, this);
    updateFileNameOnSelect(`file-upload-${uniqueId}`, `label[for="file-upload-${uniqueId}"] span`);
});
