var making_steps = document.querySelectorAll('.making_steps li');
var rotating = document.querySelectorAll('.img_rotating'); 

making_steps.forEach(li=> {
  li.addEventListener('click',()=> {
    li.classList.toggle('actstep');
    rotating.classList.toggle('rotating_img');
  });
});
function resetSteps(){
  making_steps.forEach(li=> li.classList.remove('actstep'));
}
