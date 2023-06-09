//navigation calls
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelectorAll('.menu a');

navMenu.forEach(link => {
    link.addEventListener("click", function(event){
        event.preventDefault();
        const sectionId = link.getAttribute("href");
        const section = document.querySelector(sectionId);
        section.scrollIntoView({behavior: "smooth"});
        navMenu.classList.remove("show");
    });
});
hamburgerButton.addEventListener("click", function(){
    navMenu.classList.remove("show");
});











//Transition calls
function isElementVisible(element){
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (rect.top <=windowHeight && rect.bottom >= 0);
}
var heroSection = document.getElementById('hero');
var slideInLeft = heroSection.querySelectorAll('.slide-in-left');
var textSlideRight = heroSection.querySelectorAll('.text-slide-right');
var buttonSlideRight = heroSection.querySelectorAll('.button-slide-right');

function handleScroll(){
    for (var i = 0; i < slideInLeft.length; i++){
        var slideInLeft = slideInLeft[i];
        if (isElementVisible(slideInLeft)){
            slideInLeft.ClassList.add('slide-in-left');
        }
    }
    for (var i = 0; i < textSlideRight.length; i++){
        var textSlideRight = textSlideRight[i];
        if (isElementVisible(textSlideRight)){
            textSlideRight.ClassList.add('text-slide-right');
        }
    }
    for (var i = 0; i < buttonSlideRight.length; i++){
        var buttonSlideRight = buttonSlideRight[i];
        if (isElementVisible(buttonSlideRight)){
            buttonSlideRight.ClassList.add('text-slide-right');
        }
    }
}
window.addEventListener('scroll', handleScroll);