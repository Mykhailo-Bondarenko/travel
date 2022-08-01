console.log('100 points');

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__navigation');
const close = document.querySelector('#close');
const link = document.querySelectorAll('.navigation__link');
const body = document.getElementsByTagName('body');

link.forEach(value => value.onclick = function () {
  if (window.screen.width < 391) {
    nav.style.right = '-100%';
    body[0].style.overflowY = 'auto';
  }
})

burger.onclick = function () {
  nav.style.right = '0px';
  body[0].style.overflowY = 'hidden';
}

close.onclick = function () {
  nav.style.right = '-100%';
  body[0].style.overflowY = 'auto'
}

document.addEventListener('mousedown', (e) => {
  if (e.target.closest('.header__navigation') === null) {
    nav.style.right = '-100%';
  }
});

const login = document.querySelectorAll('.login');
const modal = document.querySelector('.modal');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const register = document.querySelector('#register');
const logIn = document.querySelector('#logIn');

login.forEach(value => value.addEventListener('click', () => {
  modal.style.top = '0px';
  body[0].style.overflow = 'hidden';
  signIn.classList.add('animate');
  signIn.style.top = '0px';
}));

register.addEventListener('click', () => {
  signIn.style.top = '-100%';
  signUp.classList.add('animate');
  signUp.style.top = '-70%';
  signIn.classList.remove('animate');
});

logIn.addEventListener('click', () => {
  signUp.classList.remove('animate');
  signUp.style.top = '-200%';
  signIn.classList.add('animate');
  signIn.style.top = '0px';
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.top = "-100%";
    signIn.classList.remove('animate');
    signUp.classList.remove('animate');
    body[0].style.overflow = 'visible';
    signUp.style.top = '-200%';
  }
}

const left = document.querySelector('#left');
const centre = document.querySelector('#centre');
const right = document.querySelector('#right');

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');

const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');

function moveLeft() {
  left.classList.add('active');
  centre.classList.remove('active');
  right.classList.remove('active');
  img1.style.left = "107.5%";
  img2.style.left = "107.5%";
  img3.style.left = "107.5%";
  text1.style.left = '110%';
  text2.style.left = '110%';
  text3.style.left = '203%';
}

function moveCentre() {
  left.classList.remove('active');
  centre.classList.add('active');
  right.classList.remove('active');
  img1.style.left = "0%";
  img2.style.left = "0%";
  img3.style.left = "0%";
  text1.style.left = '-105%';
  text2.style.left = '3%';
  text3.style.left = '3%';
}

function moveRight() {
  left.classList.remove('active');
  centre.classList.remove('active');
  right.classList.add('active');
  img1.style.left = "-107.5%";
  img2.style.left = "-107.5%";
  img3.style.left = "-107.5%";
  text1.style.left = '-105%';
  text2.style.left = '-105%';
  text3.style.left = '-105%';
}

left.addEventListener('click', moveLeft);
centre.addEventListener('click', moveCentre);
right.addEventListener('click', moveRight);

img1.addEventListener('click', moveLeft);
img2.addEventListener('click', moveCentre);
img3.addEventListener('click', moveRight);

const mobileSpiderText = document.querySelector('.slider__text-mobile');

const mobileClickLeft = document.querySelector('.slider__img-left');
const mobileClickRight = document.querySelector('.slider__img-right');

const mobileLeft = document.querySelector('#mobile-left');
const mobileCentre = document.querySelector('#mobile-centre');
const mobileRight = document.querySelector('#mobile-right');

const mobileBackground = document.querySelector('.slider-mobile');

function mobileMoveLeft(e) {
  mobileLeft.classList.add('active');
  mobileCentre.classList.remove('active');
  mobileRight.classList.remove('active');
  mobileBackground.style.background = 'url("./img/mobile/d1.jpg") 0 0 no-repeat';
  mobileSpiderText.innerHTML = 'SPAIN';
  mobileClickLeft.attributes[1].nodeValue = './img/mobile/left.svg';
  mobileClickLeft.style.transform = 'rotate(0deg)';
  mobileClickRight.attributes[1].nodeValue = './img/mobile/right.svg';
  mobileClickRight.style.transform = 'rotate(0deg)';
}

function mobileMoveRight(e) {
  mobileLeft.classList.remove('active');
  mobileCentre.classList.remove('active');
  mobileRight.classList.add('active');
  mobileBackground.style.background = 'url("./img/mobile/d3.jpg") 0 0 no-repeat';
  mobileSpiderText.innerHTML = 'USA';
  mobileClickRight.attributes[1].nodeValue = './img/mobile/left.svg';
  mobileClickRight.style.transform = 'rotate(180deg)';
  mobileClickLeft.attributes[1].nodeValue = './img/mobile/right.svg';
  mobileClickLeft.style.transform = 'rotate(180deg)';
}

function mobileMoveCentre(e) {
  mobileLeft.classList.remove('active');
  mobileCentre.classList.add('active');
  mobileRight.classList.remove('active');
  mobileBackground.style.background = 'url("./img/mobile/d2.jpg") 0 0 no-repeat';
  mobileSpiderText.innerHTML = 'JAPAN';
  mobileClickLeft.attributes[1].nodeValue = './img/mobile/right.svg';
  mobileClickLeft.style.transform = 'rotate(180deg)';
  mobileClickRight.attributes[1].nodeValue = './img/mobile/right.svg';
  mobileClickRight.style.transform = 'rotate(0deg)';
}

mobileLeft.addEventListener('click', mobileMoveLeft);
mobileCentre.addEventListener('click', mobileMoveCentre);
mobileRight.addEventListener('click', mobileMoveRight);

const ml = document.querySelector('#ml');
const mr = document.querySelector('#mr');

ml.addEventListener('click', (e) => {
  e.preventDefault();
  if (mobileCentre.classList[1] === 'active') {
    return mobileMoveLeft();
  }
  if (mobileRight.classList[1] === 'active') {
    return mobileMoveCentre();
  }
})

mr.addEventListener('click', (e) => {
  e.preventDefault();
  if (mobileLeft.classList[1] === 'active') {
    return mobileMoveCentre();
  }
  if (mobileCentre.classList[1] === 'active') {
    return mobileMoveRight();
  }
})

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const sign = document.querySelector('#sign');

sign.addEventListener('click', () => {
  alert(`Email: ${email.value} Password: ${password.value}`);
})