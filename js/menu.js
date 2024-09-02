const imgmen = document.querySelector('.imgmenu')
const menu = document.querySelector('.menu-navegacion')

console.log(imgmenu);

imgmen.addEventListener('click', () =>{
    menu.classList.toggle("spread");
})


window.addEventListener('click', e =>{
    if(menu.classList.contains("spread") && e.target != menu && e.target != imgmen){
        menu.classList.toggle("spread");
    }
})