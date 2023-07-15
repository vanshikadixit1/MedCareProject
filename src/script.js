let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
window.onLoad =function(){
menu.onClick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onScroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
}