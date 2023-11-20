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