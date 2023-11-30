'use strict';

//main.js 에서도 사용한 변수 사용가능 module화 하여 사용하면 main.js에서 사용할 수 없다.

// 구현 계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver를 사용해서 모든 섹션들을 관찰해야한다. 
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션:
// - 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택
// - 마지막  contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택

const sectionsIds=['#home','#about','#skills','#work','#contact'];
const sections=sectionsIds.map(id=>document.querySelector(id));
const navItems=sectionsIds.map(id=>document.querySelector(`[href="${id}"]`));
const visibleSections=sectionsIds.map(()=>false)
let activeNavItem=navItems[0]
const options={
    rootMargin:'-40% 0px 0px 0px',
    threshold:[0,0.8],
};
const Observer=new IntersectionObserver(callback,options);
sections.forEach(section=>{Observer.observe(section);})

function callback(entries){
    let selectLastOne;
    entries.forEach((entry)=>{
    //   console.log(entry.target);
    //   console.log(entry.intersectionRatio)
    //   console.log(entry.isIntersecting)
        const index=sectionsIds.indexOf(`#${entry.target.id}`);
        visibleSections[index]=entry.isIntersecting;
        selectLastOne=index===sectionsIds.length-1&& entry.isIntersecting && entry.IntersectionRatio>=0.78;

//         const visibleSectionTrueIndex = visibleSections.map((value, index) => value ? index : -1) // true일 때는 현재 인덱스, 아니면 -1
//         .filter(index => index !== -1); // -1이 아닌 값만 필터링
//         var presentMenu = visibleSectionTrueIndex.length === 2 && Math.max.apply(null, visibleSectionTrueIndex) === sectionsIds.length - 1
//   ? Math.max.apply(null, visibleSectionTrueIndex)
//   : Math.min.apply(null, visibleSectionTrueIndex);
        // console.log(presentMenu)
        
    });
    const navIndex=selectLastOne? sectionsIds.length-1:findFirstIntersecting(visibleSections);
    selectNavItem(navIndex)
}

function findFirstIntersecting(intersections){
    const index=intersections.indexOf(true);
    return index >=0 ? index:0
}
function selectNavItem(navIndex){
    const navItem=navItems[navIndex];
    //만약에 배열 갯수보다 큰 인덱스가 나왔다면 함수 빨리 종료
    if(!navItem) return
    activeNavItem.classList.remove('active')
    activeNavItem=navItem
    activeNavItem.classList.add('active')
}