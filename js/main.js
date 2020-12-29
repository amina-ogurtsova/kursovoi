let menu = document.querySelector('.header__nav');
let txt = document.querySelector('.main__logo');
function txtAppear(){
  menu.classList.add('loaded');
  txt.classList.add('loaded');
}
document.addEventListener('DOMContentLoaded', txtAppear);
const animItems = document.querySelectorAll('._animation');
if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll (){
    for(let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      }
      else{
        animItem.classList.remove('_active');
      }
    }
  }
}

const animOtherItems = document.querySelectorAll('._other_anim');
if(animOtherItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll (){
    let delay = 0;
    for(let index = 0; index < animOtherItems.length; index++){
      const animItemOther = animOtherItems[index];
      const animItemHeightOther = animItemOther.offsetHeight;
      const animItemOffsetOther = offset(animItemOther).top;
      const otherStart = 2;
      let animItemPointOther = window.innerHeight - animItemHeightOther / otherStart;
      if(animItemHeightOther > window.innerHeight){
        animItemPointOther = window.innerHeight - window.innerHeight / otherStart;
      }

      if((window.pageYOffset > animItemOffsetOther - animItemPointOther) && window.pageYOffset < (animItemOffsetOther + animItemHeightOther) && index%2==0){
        animItemOther.classList.add('_active');
      }
      else if ((window.pageYOffset > animItemOffsetOther - animItemPointOther) && window.pageYOffset < (animItemOffsetOther + animItemHeightOther) && index%2!=0){
        animItemOther.classList.add('_active_other');
      }
      else{
        animItemOther.classList.remove('_active');
        animItemOther.classList.remove('_active_other');
      }
      for(let j = 0; j < 1; j++){
      delay++;
      animItemOther.style.transitionDelay = `${delay/4}s`;
        if (delay >= 4){
          delay =0;
        }
      }
    }
  }
}

function offset(el){
  const rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}




/*for(let i = 0; i < blocks.length; i++){
      for(let j = 0; j < 1; j++){
      let delay = j;
      blocks[i].style.transitionDelay = `${delay/4}s`;
      console.log(blocks[i]);
      }
  }*/
