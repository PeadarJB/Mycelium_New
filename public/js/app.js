// Navbar

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
// Setting active class for navbar
var navLinks = document.querySelectorAll('.nav-item .nav-link');

// Get current URL
var currentUrl = window.location.href;

// Loop through the nav links
navLinks.forEach(function(link) {
    // Check if the href of the nav link matches the current URL
    if (link.href === currentUrl) {
        // Add the "active" class to the nav link
        link.classList.add('active');
    }
});
document.addEventListener("DOMContentLoaded", function() {
  // Light Dark theme button
  var themeToggle = document.getElementById('theme-toggle');

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
  });

  // On page load, set theme based on localStorage value
  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggle.checked = true;  // Make sure the toggle button is in the correct state
  }

  // When the toggle button is clicked, add/remove 'dark-theme' class and update localStorage
  themeToggle.addEventListener('click', function() {
      if (document.body.classList.contains('dark-theme')) {  // If 'dark-theme' class is added...
          localStorage.setItem('theme', 'dark');
      } else {  // If 'dark-theme' class is removed...
          localStorage.setItem('theme', 'light');
      }
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
    autoplayTimeout: 1500, 
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