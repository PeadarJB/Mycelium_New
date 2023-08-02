var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", function() {
  // Setting active class for navbar
  const navLinks = document.querySelectorAll('.nav-item .nav-link');

  // Get current URL
  const currentUrl = window.location.href;

  // Loop through the nav links
  navLinks.forEach(function(link) {
    if (link.href === currentUrl) {
      link.classList.add('active');
    }
  });
});

// Light Dark theme button
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
  document.body.classList.add('dark-theme');
}

// GSAP
window.onload = function() {
  gsap.from(".decoration-svg", {delay: 0.5, duration: 1, x: -500, opacity: 1,});
  gsap.from(".decoration-svg-flip", {delay: 0.5, duration: 1, x: 500, opacity: 1,});
};

gsap.to(".decoration-svg", {
  x: 500,
  opacity: 0,
  scrollTrigger: {
    trigger: ".decoration-svg",
    start: "bottom bottom", 
    end: "start top",
    scrub: true
  }
});



// Project Carousel
$('#projectCarousel').on('slide.bs.carousel', function () {
    // When the slide starts, fade the text out
    $('#project-title').fadeOut();
    $('#project-description-1').fadeOut();
    $('#project-description-2').fadeOut();
    $('#project-button').fadeOut();
});

$('#projectCarousel').on('slid.bs.carousel', function () {
    // Get the index of the current active item
    var currentIndex = $('#projectCarousel .carousel-item.active').index();

    var titles = ["My-Chance", "MyFinance", "MyCredit"];
    var texts1 = [
        "Experience the innovation of MyChance, a project pioneering risk-free investment opportunities in the world of blockchain. Harnessing the principles of Circular Economy, MyChance offers the first-ever fully refundable NFTs and the first-ever Global Prize Bond system.", 
        "Delve into the revolution that MyFinance brings to the table, redefining the landscape of DeFi protocols. Through the seamless integration of Circular Economy principles, MyFinance actively streamlines support to vital global social causes while ensuring competitive returns for its users.", 
        "Venture into the future with MyCredit, a project that stands at the forefront of decentralized finance and social empowerment. Built on the ethos of inclusivity and access, MyCredit is the upcoming credit union dApp that transcends traditional banking barriers."
    ];
    var texts2 = [
        "This groundbreaking approach minimizes investment risk while offering exciting rewards, revolutionizing the blockchain space and setting new standards for user empowerment and sustainable financial practices.",
        "This unique model nullifies excessive fees, leverages the high-performance Avalanche blockchain, and democratizes access to DeFi, embodying a breakthrough combination of social responsibility and financial growth. This innovative approach is setting an unprecedented benchmark in the digital finance world, putting users' needs and global sustainability hand in hand.",
        "With an inherent focus on creating a supportive financial community, MyCredit offers accessible credit and loan opportunities to its users, making financial growth attainable for all. This revolutionary approach is changing the way we perceive credit systems, promoting financial inclusivity, and pioneering a new era of financial empowerment and equality."
    ];
    
    // Update the texts using the arrays
    $('#project-title').text(titles[currentIndex]);
    $('#project-description-1').text(texts1[currentIndex]);
    $('#project-description-2').text(texts2[currentIndex]);

    // Fade the text back in
    $('#project-title').fadeIn();
    $('#project-description-1').fadeIn();
    $('#project-description-2').fadeIn();
    $('#project-button').fadeIn();
});

// Owl Carousel
$(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 2000, 
    autoplayHoverPause: true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1, 
            nav:true  
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
            margin:20
        }
    }
  });
});

