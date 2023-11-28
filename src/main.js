
//plus btn 클릭 이벤트
$('.skills__plus__btn').on('click', function(event) {
    //배경 흐리게
    $(".shadow").show();
    //스크롤 막기
    $('body').addClass('stop-scrolling');
    
    //버튼 마다 다른 정보 보이게 
    if ($(this).hasClass('fe__btn')) {
        $('.skills__fe__info').show();
    } else if ($(this).hasClass('be__btn')) {
        $('.skills__be__info').show();
    }

    $('.close__btn').on('click',function(event){
        $('.skills__fe__info').hide();
        $('.skills__be__info').hide();
        $(".shadow").hide();
        $('body').removeClass('stop-scrolling');

    })
});


let div_Img_Slide_down=()=>{
    $('.project1__metadata__box').hide()
    $('.project2__metadata__box').hide()
    $('.project__img1').hide();
    $('.project__img2').hide();
}

$('.project__img2').hide();
$('.project1__metadata__box').show();
$(document).on('click','.slide__down',function(event){
    //slide__down 버튼 click 하면 slide__down 사라지고, slide__up 버튼 보이기
    if($(this).hasClass('project1')){
        div_Img_Slide_down();
        $('.project1__metadata__box').slideToggle();
        $('.project__img1').show();

    } else if ($(this).hasClass('project2')){
        div_Img_Slide_down();
        $('.project2__metadata__box').slideToggle();
        $('.project__img2').show();
    }   
});

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

//home 섹션을 아래로 스크롤시 투명하게 처리함
const home=document.querySelector('.home__container');
const homeHeight=home.offsetHeight;
document.addEventListener('scroll',()=>{
    home.style.opacity= 1 - window.scrollY / homeHeight;
    
})

//home 센션의  절반 정도 내려왔을때만 Arrow icon 보여주기
document.addEventListener('scroll',()=>{
    // console.log(window.scrollY/homeHeight);
    if(window.scrollY/homeHeight>0.5){
        $('.arrow__link').show();
    }
    else if(window.scrollY/homeHeight<0.5){
        $('.arrow__link').hide();
    } 
})




