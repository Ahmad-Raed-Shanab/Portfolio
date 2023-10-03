const typed = new Typed('.multiple-text' ,{
    strings: ['FRONTEND DEVELOPER','FREELANCER','DESIGNER'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent the default behavior of the link (e.g., navigating to a new page)
        e.preventDefault();

        // Remove the 'active' class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        link.classList.add('active');

        const targetId = link.getAttribute('href').substring(1);

        // Scroll to the target section smoothly
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToSection() {
    // You can replace 'sectionId' with the ID of the section you want to scroll to.
    const sectionId = 'sectionId';
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

let span = document.querySelector(".up");

window.onscroll = function () {
//   console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
    this.scrollY >= 720 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
};

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
});


let section = document.querySelector(".skills-sec");
let spans = document.querySelectorAll(".progress .progress-bar");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 180) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};