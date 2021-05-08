
let bodyScrollTop = 0;

const gnbSlogan = document.querySelector('.gnb_slogan');
const gnbMenu = document.querySelector('.gnb_menu');

let moveTopBtn = document.querySelector('.move_top');

function navChange() {


    bodyScrollTop = window.pageYOffset;

    // 스크롤에 따른 헤더 변화
    if (bodyScrollTop > 50 ) {
        gnbSlogan.style.width = "0";
        gnbSlogan.style.opacity = "0";
        gnbMenu.style.marginTop = "0px";
    
    } else {
        gnbSlogan.style.width = "370px";
        gnbSlogan.style.opacity = "1";
        gnbMenu.style.marginTop = "60px";
    }

    // 스크롤에 따라 누르면 상단으로 이동하는 버튼 기능
    if (bodyScrollTop >= 1000) {
        moveTopBtn.style.bottom = "24px";
    } else {
        moveTopBtn.style.bottom = "-100px";
    }
}


// Search 입력 창 보이기 숨기기
let gnbRightLink = document.querySelector('.gnb_right_link');
let gnbSearch = document.querySelector('.gnb_search');

function searchShow() {
    gnbRightLink.style.display = "none";
    gnbSearch.style.display = "block";
}

function searchHide() {
    gnbRightLink.style.display = "block";
    gnbSearch.style.display = "none";
}


//검색 기능 구현
//1. 검색 입력 창에 값이 입력되면 onchange
//2. 입력 창 요소의 값과 각 프로젝트의 타이틀 컨텐츠와 비교
// - 대소문자 구분해서 검색
// - 대소문자 구분없이 검색(2가지 방법)
//3. 프로젝트 타이틀이 입력 값을 포함하고 있으면 화면에 프로젝트를 표시하고, 포함하지 않은 프로젝트들은 숨기기
// 4.Hero section을 숨긴다
// 5. 만약 검색 결과 값이 없다면 메시지 출력
// Your search '(입력값)' did not match any contents.
// Make sure all words are spelled correctly or try different keywords.

// 변수 선언
// 1. 사용자 검색 입력 값 searchText
// 2. 프로젝트 리스트 projectItem
// 3. 프로젝트 타이틀 projectTitle

// Search 기능 구현
let searchText; //검색창에 입력되는 텍스트 값
let projectItem; // 각 프로젝트 리스트 (li)
let projectTitle; //각 프로젝트의 title
let projectNum; // 전체 프로젝트 수
let resultNum;//검색 결과 매칭되는 프로젝트 수

//sensitive way=> search method 사용
// function searchProject() {

//     searchText = document.getElementById('project_search').value;
//     projectItem = document.querySelectorAll('.project_item');
//     projectNum = projectItem.length;
//     projectTitle = document.querySelectorAll('.project_title');

//     document.getElementById('hero').style.display = "none";

//     // indexof 사용
//     for (let i=0; i<projectNum; i++) {
//         if (projectTitle[i].innerHTML.search(searchText) >= 0) {
//             projectItem[i].style.display = "block";
//         } else {
//             projectItem[i].style.display = "none";
//         }
//     }
// }


// toLowerCase or toUpperCase method / indexOf 사용
// function searchProject() {

//     searchText = document.getElementById('project_search').value.toLowerCase();
//     projectItem = document.querySelectorAll('.project_item');
//     projectNum = projectItem.length;
//     projectTitle = document.querySelectorAll('.project_title');

//     document.getElementById('hero').style.display = "none";

//     for (let i=0; i<projectNum; i++) {
//         if (projectTitle[i].innerHTML.toLowerCase().indexOf(searchText) >= 0) {
//             projectItem[i].style.display = "block";
//         } else {
//             projectItem[i].style.display = "none";
//         }
//     }
// }

// insensitive way
// search(/찾을 문자열/i) =>정규식을 이용하여 대소문자 구별하지 않고 같은 문자열 찾음
// 정규표현식이란 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)
function searchProject() {

    searchText = document.getElementById('project_search').value;

    let searchTextI = new RegExp(searchText, "i"); 
    //정규식 정의하기(정규식 객체 생성), search()에 searchText를 그대로 넣으면 문자열로 인식하므로 정규식으로 만들어야 함

    projectItem = document.querySelectorAll('.project_item');
    projectNum = projectItem.length;
    projectTitle = document.querySelectorAll('.project_title');
    resultNum = 0; //검색 결과 초기화

    //hero 숨기기
    document.getElementById('hero').style.display = "none";

    // indexof 사용
    for (let i=0; i<projectNum; i++) {
        if (projectTitle[i].innerHTML.search(searchTextI) >= 0) {
            projectItem[i].style.display = "block";
            resultNum++;
        } else {
            projectItem[i].style.display = "none";
        }
    }

    if (resultNum == 0) {
        document.getElementById('searchKeyword').innerHTML = searchText;
        document.querySelector('.no_result').style.display = "block";
    }
    
}


