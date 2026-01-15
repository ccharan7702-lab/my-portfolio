// ===== INTRO =====
const intro = document.querySelector('.intro');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
  intro.style.top = '-100%';
});

// ===== BURGER MENU =====
const burger = document.querySelector('.burger');
const navMenu = document.getElementById('navMenu');
burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// ===== SCROLL ARROWS =====
const upArrow = document.querySelector('.arrow.up');
const downArrow = document.querySelector('.arrow.down');

upArrow.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
downArrow.addEventListener('click', () => window.scrollBy({top:window.innerHeight, behavior:'smooth'}));

// ===== PROJECT CARD ANIMATION =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card=>{
  card.addEventListener('click', ()=>{
    card.classList.toggle('active');
  });
});

// ===== GSAP ANIMATIONS =====
if(typeof gsap !== 'undefined'){
  gsap.from('.hero-text h1',{y:50,opacity:0,duration:1});
  gsap.from('.hero-text p',{y:50,opacity:0,duration:1,delay:0.3});
  gsap.from('.hero-icons a',{y:50,opacity:0,duration:1,stagger:0.2,delay:0.5});
  gsap.from('.section h2',{y:50,opacity:0,duration:1,stagger:0.2});
}