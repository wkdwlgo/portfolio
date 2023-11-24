
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


$(document).on('click','.slide__down',
function(){
    $(this).hide();
    $('.slide__up').removeClass('.display__none');
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

