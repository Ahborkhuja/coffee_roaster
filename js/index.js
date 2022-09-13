var inner_list = document.querySelectorAll('.inner_list li');


inner_list.forEach(li=> {
  li.addEventListener('click',()=> {
    li.classList.add('active'); 
    resetLinks();
    li.classList.add('active');
  });
});

function resetLinks(){
  inner_list.forEach(li=> li.classList.remove("active"));
}

var making_steps = document.querySelectorAll('.making_steps li');

making_steps.forEach(li=> {
  li.addEventListener('click',()=> {
    li.classList.add('actstep');
    resetSteps();
    li.classList.add('actstep');
  });
});
function resetSteps(){
  making_steps.forEach(li=> li.classList.remove('actstep'));
}