//문서의 내용이 모두 로드되면 할일
//대상.addEventListener('이벤트종류', 할일);
//DOMContentLoaded
//할일 = 함수 = function(){실제로 }

document.addEventListener('DOMContentLoaded',function(){
    //skills 슬라이드 구현
//변수 지정
const $slideWrap = document.querySelector('.projects__box');
const $slideContainer = document.querySelector('.projects');
const $slide = document.querySelectorAll('.project');
const $navPrev = document.querySelector('.prev__button');
const $navNext = document.querySelector('.next__button');
let $slideWidth = $slide[0].offsetWidth;
let $slideHeight=$slide[0].offsetHeight;
let $currentIndex = 0;
//슬라이드의 높이 확인하여 부모의 높이로 지정하기- 대상 . offsetHeight

const liWidth = $slide[0].clientWidth;
const sliderWidth = liWidth * $slide.length;
$slideContainer.style.width = `${sliderWidth}px` ;
console.log(sliderWidth);

//슬라이드가 있으면 가로로 배열하기
for (var i=0; i<$slide.length; i++){
    $slide[i].style.left=i*100+'%'
}

    // 슬라이드 이동 함수
    function goToSlide(index) {
        
        $slideContainer.style.left = -100 * index + '%';
        $currentIndex = index;
    }


//버튼기능 업데이트 함수
//버튼을 클릭하면 슬라이드 이동시키기
//다음버튼을 클릭하면 할일, 이전 버튼을 클릭하면 할일
$navPrev.addEventListener('click', function () {
    if($currentIndex ==0){
        goToSlide($slide.length-1)
    }
    else{
    goToSlide($currentIndex - 1);
    }
    
});

$navNext.addEventListener('click', function () {
    
    //마지막이라면 $navNext 안보이도록, 아니라면 $navNext 다시 나타나도록
    if($currentIndex==$slide.length-1){
        goToSlide(0);
    }
    else{
        goToSlide($currentIndex+1);
    }
});
//첫번째 슬라이드 먼저 보이게 하기
goToSlide(0)
})




// Header에 페이지 아래로 스크롤시 다크 스타일링 적용(대강으로 주석달기)
const header=document.querySelector('.header');
const headerHeight=header.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    //스크롤되는 Y좌표가 headerHeight보다 크다면 다른 스타일링!(이렇게 자세하게 주석다는 것 보다는 )
    if(window.scrollY>headerHeight){
        header.classList.add('header--dark');
    }
    else{
        header.classList.remove('header--dark');
    }
})

