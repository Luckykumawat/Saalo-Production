var tl = gsap.timeline()
    tl.from('nav .ankers a,nav .logo,nav .social-app',{
    y:-60,
    duration:1,
    opacity:0,
    stagger:.3,
    ease: Power4
    })

    tl.from('.page_0 .one',{
        y:60,
        opacity:0,
        duration:1,
    },'a')

    gsap.from('.scroll-brn',{
       y:60,
       duration:1,
       opacity:0,
       scrollTrigger:'.page_2'
    })


    var close = document.querySelector('.close')
    var icon = document.querySelector('.icon')
    var burger = document.querySelector('.burger')

    var play6 = document.querySelector('.videos')

    icon.addEventListener('click',function(){
         burger.style.display = 'block'
    })

    close.addEventListener('click',function(){
        burger.style.display = 'none'
   })

     // Initialize variable to track previous scroll position
var prevScrollpos = window.scrollY;

// Get the button
var scrollButton = document.getElementById("scrollBtn");

// Function to be called when the user scrolls
window.onscroll = function() {
    // Get the current scroll position
    var currentScrollPos = window.scrollY;

    // Show or hide the button based on scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "flex";
    } else {
        scrollButton.style.display = "none";
    }

    // Toggle navbar visibility based on scroll direction
    if (prevScrollpos > currentScrollPos) { // If user is scrolling up
        document.getElementById("navbar").style.top = "0"; // Show the navbar
    } else { // If user is scrolling down
        document.getElementById("navbar").style.top = "-70px"; // Hide the navbar
    }

    // Update previous scroll position
    prevScrollpos = currentScrollPos;
};

// Function to scroll to the top of the document
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling behavior
    });
}
