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