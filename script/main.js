// nav bar
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});
//go to the top
const topBtn = document.querySelector('.back-top');
window.onscroll = function () {
    onScrollShow();
};
function onScrollShow() { 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = 'block';
   
    } else { 
        topBtn.style.display = 'none';
    }
}
function topFunction() { 
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}