// navbar 

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky * 3) {
    navbar.classList.add("sticky")
 
  } else {
    navbar.classList.remove("sticky");
  
  }
}

// languages
function tb8_makeArray(n){
  this.length = n;
  return this.length;
}
tb8_messages = new tb8_makeArray(10);
tb8_messages[0] = "hello";
tb8_messages[1] = "hola";
tb8_messages[2] = "नमस्कार";
tb8_messages[3] = "مرحبا";
tb8_messages[4] = "你好";
tb8_messages[5] = "こんにちは";
tb8_messages[6] = "สวัสดี"
tb8_messages[7] = "ሰላም";
tb8_messages[8] = "привет";
tb8_messages[9] = "שלום";
tb8_rptType = 'infinite';
tb8_rptNbr = 5;
tb8_speed = 100;
tb8_delay = 2000;
var tb8_counter=1;
var tb8_currMsg=0;
var tb8_tekst ="";
var tb8_i=0;
var tb8_TID = null;
function tb8_pisi(){
  tb8_tekst = tb8_tekst + tb8_messages[tb8_currMsg].substring(tb8_i, tb8_i+1);
  document.title = tb8_tekst;
  tb8_sp=tb8_speed;
  tb8_i++;
  if (tb8_i==tb8_messages[tb8_currMsg].length){
    tb8_currMsg++; tb8_i=0; tb8_tekst="";tb8_sp=tb8_delay;
  }
  if (tb8_currMsg == tb8_messages.length){
    if ((tb8_rptType == 'finite') && (tb8_counter==tb8_rptNbr)){
      clearTimeout(tb8_TID);
      return;
    }
    tb8_counter++;
    tb8_currMsg = 0;
  }
  tb8_TID = setTimeout("tb8_pisi()", tb8_sp);
}
tb8_pisi()


// timeline 

$(function(){
  
  window.sr = ScrollReveal();
  
  if ($(window).width() < 768) {
    
    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }
    
    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
    
  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
    
    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
    
  }
  
  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });
  
  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });
  
  
});


//cards 
document.body.innerHTML += `
<div style="height: 16px"></div>
`;

for (let i = 0; i < 1; i += 1) {
  document.body.innerHTML += `
  <div class="box"><div>
  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <defs>
  <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" stop-color="#f079ba"/>
  <stop offset="100%" stop-color="#e34a82"/>
  </linearGradient>
  </defs>
  <path fill="url(#linear)" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,197.3C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg>
  <div>Bank</div>
  <div class="content">
  <div>
  <div class="label">Card Holder name</div>
  <div class="value">Colin van Eenige</div>
  </div>
  <div>
  <div class="label">Expiry Date</div>
  <div class="value value-right">05/25</div>
  </div>
  </div>
  </div></div>
  `;
}

requestAnimationFrame(() => {
  const boxes = document.querySelectorAll(".box");
  
  function getIntersectionRatio(i) {
    const a = [window.scrollY, window.scrollY + window.innerHeight];
    const b = [boxes[i].offsetTop, boxes[i].offsetTop + boxes[i].clientHeight];
    
    const max = Math.max(a[0], b[0]);
    const min = Math.min(a[1], b[1]);
    
    return Math.max(0, (min - max) / (b[1] - b[0]));
  }
  
  function onScroll() {
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i += 1) {
      const intersection = getIntersectionRatio(i);
      const top = boxes[i].offsetTop - window.pageYOffset < 0;
      boxes[i].firstChild.style.cssText = `
      transform-origin: ${top ? "center center" : "top center"};
      position: ${top ? "fixed" : "absolute"};
      transform: scale(${intersection});
      opacity: ${intersection};
      `;
    }
    requestAnimationFrame(onScroll);
  }
  
  onScroll();
});

// Option with less CPU usage, but also less FPS / smooth
// window.addEventListener('scroll', onScroll);

// accordian text
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} 
/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}*/