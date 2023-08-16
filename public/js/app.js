gsap.registerPlugin(ScrollTrigger);

// Navbar scroll function
function handleNavbarScroll() {
  let prevScrollpos = window.pageYOffset;
  
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }
}

// Function for setting active class for navbar
function handleActiveClassForNavbar() {
  const navLinks = document.querySelectorAll('.nav-item .nav-link');
  const currentUrl = window.location.href;

  navLinks.forEach(function(link) {
    if (link.href === currentUrl) {
      link.classList.add('active');
    }
  });
}

// Function for handling theme
function handleTheme() {
  const themeToggle = document.getElementById('theme-toggle');

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

// Initialize all
document.addEventListener("DOMContentLoaded", function() {
  handleNavbarScroll();
  handleActiveClassForNavbar();
  handleTheme();
});

  // GSAP Animations



gsap.to(".decoration-svg", {
  x: -500,
  opacity: 1,
  scrollTrigger: {
    trigger: ".decoration-svg",
    start: "bottom bottom", 
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".decoration-svg-flip", {
  x: 500,
  opacity: 1,
  scrollTrigger: {
    trigger: ".decoration-svg",
    start: "bottom bottom", 
    end: "bottom top",
    scrub: true
  }
});

gsap.fromTo(".decoration-svg-2", 
  {x: 300},  // Starting state
  {x: 0,    // Ending state
  scrollTrigger: {
    trigger: ".decoration-svg-2",
    start: "top-=200px bottom", // Starts when the top of the element hits the bottom of the viewport
    
    scrub: true
  }
});

gsap.fromTo("#news-decoration",
  {x: -500},  // Starting state
  {x: 0,    // Ending state
  scrollTrigger: {
    trigger: "#news-decoration",
    start: "top bottom", // Starts when the top of the element hits the bottom of the viewport
    end: "bottom top",
    scrub: true
  }
});

gsap.fromTo("#partner-decoration",
  {x: 500, opacity: 0},  // Starting state
  {x: 0, opacity: 1,    // Ending state
  scrollTrigger: {
    trigger: "#partner-decoration",
    start: "top bottom", // Starts when the top of the element hits the bottom of the viewport
    end: "bottom top",
    scrub: true
  }
});

gsap.fromTo("#social-decoration",
  {x: 500},  // Starting state
  {x: 0,    // Ending state
  scrollTrigger: {
    trigger: "#social-decoration",
    start: "top bottom", // Starts when the top of the element hits the bottom of the viewport
    end: "bottom top",
    scrub: true
  }
});

gsap.fromTo("#social-decoration-flip",
  {x: -500},  // Starting state
  {x: 0,    // Ending state
  scrollTrigger: {
    trigger: "#social-decoration-flip",
    start: "top bottom", // Starts when the top of the element hits the bottom of the viewport
    end: "bottom top",
    scrub: true
  }
});

gsap.from(".about-content-container:first-child .about-content", {
  duration: 1,
  opacity: 0,
  y: 30,
  x: -30,
  stagger: 0.3
});

// Fade-in animation for other paragraphs when they appear on screen
gsap.utils.toArray(".about-content-container:not(:first-child) .about-content").forEach(function(elem) {
  gsap.from(elem, {
      scrollTrigger: {
          trigger: elem,
          start: "top 60%", // start when the top of the element hits 90% from the top of the viewport
          end: "bottom 30%", // end when the bottom of the element hits 60% from the top of the viewport
          toggleActions: "play none none reverse" 
      },
      duration: 1,
      opacity: 0,
      y: 30,
      x: -30,
  });
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
        500:{
            items:2, 
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

