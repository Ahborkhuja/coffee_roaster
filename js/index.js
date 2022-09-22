var making_steps = document.querySelectorAll('.coffee_making__menu_list li');
var rotating = document.querySelectorAll('.content__row img');
const mobile_header = document.querySelector('.site_header__burger');
const body = document.querySelector('body');
making_steps.forEach(li => {
  li.addEventListener('click', () => {
    li.classList.add('actstep');
    resetSteps();
    li.classList.add('actstep');
  });
});
function resetSteps() {
  making_steps.forEach(li => li.classList.remove('actstep'));
}
rotating.forEach(img =>{
  img.addEventListener('click', () => {
    img.classList.add('rotor');
    rotar();
    img.classList.add('rotor');
  });
});
function rotar() {
  rotating.forEach(img => img.classList.remove('rotor'));
};
mobile_header.addEventListener('click', ()=>{
  mobile_header.classList.toggle('open'
  );
  body.classList.toggle('overflow');
});