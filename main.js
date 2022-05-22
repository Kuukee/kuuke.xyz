//I'm using this js for the index.html js, I dunno if this is commonplace but this seem like a nice way to divide stuff in its desired pages


// When the user scrolls down 20px from the top of the document, show the button
//And gets the button ID lol
var mybutton = document.getElementById('myBtn');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.scrollY > 200 || window.scrollY > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// General scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//Height for iphones (fuck iphones)
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty(" — app-height", `${window.innerHeight}px`)
   }
   window.addEventListener("resize", appHeight)
   appHeight()