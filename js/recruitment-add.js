// 썸네일 사진 업로드 버튼 커스텀
document.getElementById('uploadButton').onclick = function () {
    document.getElementById('imageUpload').click();
};

// 파일 선택 시 미리보기 업데이트
document.getElementById('imageUpload').onchange = function (event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('imgPreview');
        output.src = reader.result;
    };
    reader.readAsDataURL(file);

    // 미리보기 컨테이너를 보이게 설정
    const imagePreviewContainer = document.getElementById('imagePreview');
    imagePreviewContainer.style.display = 'block';
};

// 기타소개 글자수 나타내기
function updateCharacterCount() {
    var introduction = document.getElementById('introduction');
    var charCount = document.getElementById('charCount');
    var currentLength = introduction.value.length;
    charCount.textContent = `${currentLength}/500`;

    // 입력 글자수가 500자를 초과할 경우 알림
    if (currentLength > 500) {
        alert('500자를 초과할 수 없습니다.');
        introduction.value = introduction.value.substring(0, 500);
        charCount.textContent = `500/500`;
    }
}



