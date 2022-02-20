const bodySize = document.querySelector("body");

bodySize.style.height = `${window.innerHeight - 10}px`;
/*PC에서 창 크기 최대화 하면 왠지는 모르겠지만 내가 창 크기 수동으로 최대한으로 늘린거보다 
10px 더 커서 최대화 상태에서 로드된 페이지가 창모드로 변경하면 스크롤바가 생겨버려 보기에 
안 좋으므로 10px 어차피 티도 안 나는거 그냥 빼주기로 함.*/
